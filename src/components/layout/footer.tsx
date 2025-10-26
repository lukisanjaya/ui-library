import * as React from "react"
import { cn } from "../../utils/cn"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, children, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(
        "border-t bg-background px-6 py-4 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </footer>
  )
)
Footer.displayName = "Footer"

export { Footer }