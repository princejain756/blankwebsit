const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
const config = require('./config');

const app = express();
const PORT = config.port;

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (Array.isArray(config.corsOrigin)) {
      // Development: allow multiple origins
      if (config.corsOrigin.includes(origin)) {
        return callback(null, true);
      }
    } else {
      // Production: allow single origin
      if (origin === config.corsOrigin) {
        return callback(null, true);
      }
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json());
app.use(express.static(config.frontendPath));

// Database setup
const dbPath = config.databasePath;
const db = new sqlite3.Database(dbPath);

// Initialize database tables
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Users table
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          password_hash TEXT NOT NULL,
          name TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Journals table
      db.run(`
        CREATE TABLE IF NOT EXISTS journals (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          mood TEXT,
          tags TEXT,
          is_public BOOLEAN DEFAULT 0,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
        )
      `);

      // Saved Items table
      db.run(`
        CREATE TABLE IF NOT EXISTS saved_items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          product_id TEXT NOT NULL,
          product_name TEXT NOT NULL,
          product_category TEXT NOT NULL,
          product_price REAL NOT NULL,
          product_original_price REAL,
          product_image TEXT NOT NULL,
          product_description TEXT NOT NULL,
          product_rating REAL,
          product_review_count INTEGER,
          product_tags TEXT,
          is_in_stock BOOLEAN DEFAULT 1,
          is_on_sale BOOLEAN DEFAULT 0,
          discount_percentage REAL,
          priority TEXT DEFAULT 'medium' CHECK(priority IN ('high', 'medium', 'low')),
          added_date TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
        )
      `);

      // Create indexes
      db.run('CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)');
      db.run('CREATE INDEX IF NOT EXISTS idx_journals_user_id ON journals(user_id)');
      db.run('CREATE INDEX IF NOT EXISTS idx_journals_created_at ON journals(created_at)');
      db.run('CREATE INDEX IF NOT EXISTS idx_saved_items_user_id ON saved_items(user_id)');
      db.run('CREATE INDEX IF NOT EXISTS idx_saved_items_product_id ON saved_items(product_id)');
      db.run('CREATE INDEX IF NOT EXISTS idx_saved_items_priority ON saved_items(priority)');

      resolve();
    });
  });
};

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  // In a real app, you'd verify JWT tokens
  // For now, we'll use a simple user ID from the token
  try {
    const userId = parseInt(token);
    if (isNaN(userId)) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Routes

// User registration
app.post('/api/auth/register', async (req, res) => {
  console.log('Registration request received from origin:', req.headers.origin);
  
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Check if user already exists
    db.get('SELECT id FROM users WHERE email = ?', [email], async (err, row) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error' });
      }

      if (row) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      // Hash password
      const passwordHash = await bcrypt.hash(password, 12);

      // Create user
      db.run(
        'INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)',
        [email, passwordHash, name],
        function(err) {
          if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Failed to create user' });
          }

          // Get the created user
          db.get('SELECT id, email, name, created_at FROM users WHERE id = ?', [this.lastID], (err, user) => {
            if (err) {
              console.error('Database error:', err);
              return res.status(500).json({ message: 'Failed to retrieve user' });
            }

            res.status(201).json({
              success: true,
              message: 'Account created successfully!',
              user: {
                ...user,
                token: user.id.toString() // Simple token for demo
              }
            });
          });
        }
      );
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error' });
      }

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password_hash);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Return user data
      res.json({
        success: true,
        message: 'Login successful!',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          created_at: user.created_at,
          token: user.id.toString() // Simple token for demo
        }
      });
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get user journals
app.get('/api/journals', authenticateToken, (req, res) => {
  const userId = req.userId;

  db.all(
    'SELECT * FROM journals WHERE user_id = ? ORDER BY created_at DESC',
    [userId],
    (err, journals) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to fetch journals' });
      }

      res.json(journals);
    }
  );
});

// Create new journal
app.post('/api/journals', authenticateToken, (req, res) => {
  const userId = req.userId;
  const { title, content, mood, tags, is_public } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const tagsString = tags && tags.length > 0 ? tags.join(',') : '';

  db.run(
    'INSERT INTO journals (user_id, title, content, mood, tags, is_public) VALUES (?, ?, ?, ?, ?, ?)',
    [userId, title, content, mood || null, tagsString, is_public ? 1 : 0],
    function(err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to create journal' });
      }

      // Get the created journal
      db.get('SELECT * FROM journals WHERE id = ?', [this.lastID], (err, journal) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Failed to retrieve journal' });
        }

        res.status(201).json(journal);
      });
    }
  );
});

// Update journal
app.put('/api/journals/:id', authenticateToken, (req, res) => {
  const userId = req.userId;
  const journalId = req.params.id;
  const { title, content, mood, tags, is_public } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  // Verify ownership
  db.get('SELECT id FROM journals WHERE id = ? AND user_id = ?', [journalId, userId], (err, journal) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (!journal) {
      return res.status(404).json({ message: 'Journal not found or access denied' });
    }

    const tagsString = tags && tags.length > 0 ? tags.join(',') : '';

    // Update journal
    db.run(
      'UPDATE journals SET title = ?, content = ?, mood = ?, tags = ?, is_public = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, content, mood || null, tagsString, is_public ? 1 : 0, journalId],
      function(err) {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Failed to update journal' });
        }

        // Get the updated journal
        db.get('SELECT * FROM journals WHERE id = ?', [journalId], (err, journal) => {
          if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Failed to retrieve journal' });
          }

          res.json(journal);
        });
      }
    );
  });
});

// Delete journal
app.delete('/api/journals/:id', authenticateToken, (req, res) => {
  const userId = req.userId;
  const journalId = req.params.id;

  // Verify ownership
  db.get('SELECT id FROM journals WHERE id = ? AND user_id = ?', [journalId, userId], (err, journal) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (!journal) {
      return res.status(404).json({ message: 'Journal not found or access denied' });
    }

    // Delete journal
    db.run('DELETE FROM journals WHERE id = ?', [journalId], function(err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to delete journal' });
      }

      res.json({ message: 'Journal deleted successfully' });
    });
  });
});

// Get public journals
app.get('/api/journals/public', (req, res) => {
  db.all(`
    SELECT j.*, u.name as user_name, u.email as user_email
    FROM journals j
    JOIN users u ON j.user_id = u.id
    WHERE j.is_public = 1
    ORDER BY j.created_at DESC
    LIMIT 50
  `, (err, journals) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Failed to fetch public journals' });
    }

    res.json(journals);
  });
});

// Search journals
app.get('/api/journals/search', authenticateToken, (req, res) => {
  const userId = req.userId;
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  const searchQuery = `%${q}%`;

  db.all(
    'SELECT * FROM journals WHERE user_id = ? AND (title LIKE ? OR content LIKE ? OR tags LIKE ?) ORDER BY created_at DESC',
    [userId, searchQuery, searchQuery, searchQuery],
    (err, journals) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to search journals' });
      }

      res.json(journals);
    }
  );
});

// Saved Items routes
app.get('/api/saved-items', authenticateToken, (req, res) => {
  const userId = req.userId;

  db.all(
    'SELECT * FROM saved_items WHERE user_id = ? ORDER BY priority DESC, added_date DESC',
    [userId],
    (err, savedItems) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to fetch saved items' });
      }

      res.json(savedItems);
    }
  );
});

app.post('/api/saved-items', authenticateToken, (req, res) => {
  const userId = req.userId;
  const { product_id, product_name, product_category, product_price, product_original_price, 
          product_image, product_description, product_rating, product_review_count, product_tags,
          is_in_stock, is_on_sale, discount_percentage, priority } = req.body;
  
  if (!product_id || !product_name || !product_category || !product_price || !product_image || !product_description) {
    return res.status(400).json({ message: 'Required product information is missing' });
  }

  db.run(`
    INSERT INTO saved_items (
      user_id, product_id, product_name, product_category, product_price, product_original_price,
      product_image, product_description, product_rating, product_review_count, product_tags,
      is_in_stock, is_on_sale, discount_percentage, priority, added_date
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    userId, product_id, product_name, product_category, product_price, product_original_price,
    product_image, product_description, product_rating || null, product_review_count || null, product_tags || null,
    is_in_stock ? 1 : 0, is_on_sale ? 1 : 0, discount_percentage || null, priority || 'medium',
    new Date().toISOString().split('T')[0]
  ], function(err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Failed to save item' });
    }

    // Get the created saved item
    db.get('SELECT * FROM saved_items WHERE id = ?', [this.lastID], (err, savedItem) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to retrieve saved item' });
      }

      res.status(201).json(savedItem);
    });
  });
});

app.put('/api/saved-items/:id', authenticateToken, (req, res) => {
  const userId = req.userId;
  const itemId = req.params.id;
  const updates = req.body;

  // Verify ownership
  db.get('SELECT id FROM saved_items WHERE id = ? AND user_id = ?', [itemId, userId], (err, item) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (!item) {
      return res.status(404).json({ message: 'Saved item not found or access denied' });
    }

    // Build update query dynamically
    const allowedFields = ['priority', 'is_in_stock', 'is_on_sale', 'discount_percentage'];
    const updateFields = [];
    const values = [];

    allowedFields.forEach(field => {
      if (updates[field] !== undefined) {
        updateFields.push(`${field} = ?`);
        values.push(updates[field]);
      }
    });

    if (updateFields.length === 0) {
      return res.status(400).json({ message: 'No valid fields to update' });
    }

    updateFields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(itemId);

    const query = `UPDATE saved_items SET ${updateFields.join(', ')} WHERE id = ?`;

    db.run(query, values, function(err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to update saved item' });
      }

      // Get the updated saved item
      db.get('SELECT * FROM saved_items WHERE id = ?', [itemId], (err, savedItem) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Failed to retrieve updated saved item' });
        }

        res.json(savedItem);
      });
    });
  });
});

app.delete('/api/saved-items/:id', authenticateToken, (req, res) => {
  const userId = req.userId;
  const itemId = req.params.id;

  // Verify ownership
  db.get('SELECT id FROM saved_items WHERE id = ? AND user_id = ?', [itemId, userId], (err, item) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (!item) {
      return res.status(404).json({ message: 'Saved item not found or access denied' });
    }

    // Delete saved item
    db.run('DELETE FROM saved_items WHERE id = ?', [itemId], function(err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to delete saved item' });
      }

      res.json({ message: 'Saved item deleted successfully' });
    });
  });
});

app.get('/api/saved-items/search', authenticateToken, (req, res) => {
  const userId = req.userId;
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  const searchQuery = `%${q}%`;

  db.all(`
    SELECT * FROM saved_items 
    WHERE user_id = ? AND (
      product_name LIKE ? OR product_description LIKE ? OR product_tags LIKE ? OR product_category LIKE ?
    ) 
    ORDER BY priority DESC, added_date DESC
  `, [userId, searchQuery, searchQuery, searchQuery, searchQuery], (err, savedItems) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Failed to search saved items' });
    }

    res.json(savedItems);
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Initialize database and start server
initDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Journal API server running on port ${PORT}`);
      console.log(`📚 Database initialized at: ${dbPath}`);
      console.log(`🌐 Frontend available at: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('✅ Database connection closed');
    }
    process.exit(0);
      });
  });