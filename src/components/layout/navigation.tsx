import * as React from "react"
import { cn } from "../../utils/cn"

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("flex items-center space-x-4", className)}
      {...props}
    >
      {children}
    </nav>
  )
)
Navigation.displayName = "Navigation"

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  active?: boolean
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ className, children, active, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
        active ? "text-foreground" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
)
NavItem.displayName = "NavItem"

export { Navigation, NavItem }