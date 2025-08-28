import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-electric text-snow hover:bg-electric/90 rounded-xl shadow-elegant hover:shadow-glow border border-electric/20",
        primary: "bg-gradient-to-r from-electric to-neon text-snow hover:shadow-glow rounded-xl btn-magnetic",
        luxury: "glass-morphism text-foreground hover:bg-white/5 rounded-xl border-white/10 backdrop-blur-xl luxury-card",
        magnetic: "bg-obsidian text-snow hover:bg-charcoal rounded-xl btn-magnetic shadow-elegant hover:shadow-glow",
        outline: "border-2 border-electric/30 bg-transparent text-electric hover:bg-electric/5 rounded-xl hover:border-electric/50",
        ghost: "hover:bg-electric/10 text-foreground rounded-xl hover:text-electric",
        gold: "bg-gradient-to-r from-gold to-yellow-500 text-obsidian rounded-xl shadow-elegant hover:shadow-glow font-semibold",
        link: "text-electric underline-offset-4 hover:underline font-medium",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm rounded-lg",
        default: "h-12 px-6 py-3 text-base",
        lg: "h-14 px-8 py-4 text-lg rounded-xl",
        xl: "h-16 px-10 py-5 text-xl rounded-2xl font-display",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
