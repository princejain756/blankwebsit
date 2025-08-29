const path = require('path');

const config = {
  development: {
    port: 3001,
    corsOrigin: [
      'http://localhost:5173', 
      'http://localhost:3000', 
      'http://127.0.0.1:5173',
      'http://localhost:8080',
      'http://localhost:8081',
      'http://localhost:8082',
      'http://localhost:8083',
      'http://localhost:8084',
      'http://localhost:8085'
    ],
    databasePath: path.join(__dirname, 'journal.db'),
    frontendPath: path.join(__dirname, '../dist')
  },
  production: {
    port: process.env.PORT || 3001,
    corsOrigin: 'https://blank.cool',
    databasePath: process.env.DATABASE_PATH || path.join(__dirname, 'journal.db'),
    frontendPath: path.join(__dirname, '../dist')
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];
