import React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "danger"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary-600 text-white hover:bg-primary-700 shadow-sm": variant === "default",
            "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20": variant === "secondary",
            "border border-gray-200 dark:border-white/5 bg-white dark:bg-[#16181D] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-900 dark:text-white": variant === "outline",
            "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white": variant === "ghost",
            "bg-red-50 text-red-600 dark:bg-red-500/20 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-500/30": variant === "danger",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-12 rounded-lg px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
