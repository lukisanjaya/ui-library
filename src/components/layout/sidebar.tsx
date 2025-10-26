import * as React from "react"
import { cn } from "../../utils/cn"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-64 flex-col border-r bg-background",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
Sidebar.displayName = "Sidebar"

export { Sidebar }