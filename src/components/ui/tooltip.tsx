import * as React from "react"
import { cn } from "../../utils/cn"

const TooltipContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({ open: false, onOpenChange: () => {} })

export interface TooltipProps {
  children: React.ReactNode
}

export const Tooltip = ({ children }: TooltipProps) => {
  const [open, setOpen] = React.useState(false)
  
  return (
    <TooltipContext.Provider value={{ open, onOpenChange: setOpen }}>
      <div className="relative inline-block">{children}</div>
    </TooltipContext.Provider>
  )
}

export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const { onOpenChange } = React.useContext(TooltipContext)
    
    if (asChild && React.isValidElement(children)) {
      const childProps = children.props as any
      return React.cloneElement(children, {
        ...childProps,
        onMouseEnter: () => onOpenChange(true),
        onMouseLeave: () => onOpenChange(false)
      })
    }
    
    return (
      <div
        ref={ref}
        className={className}
        onMouseEnter={() => onOpenChange(true)}
        onMouseLeave={() => onOpenChange(false)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TooltipTrigger.displayName = "TooltipTrigger"

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = React.useContext(TooltipContext)
    
    if (!open) return null
    
    return (
      <div
        ref={ref}
        className={cn(
          "absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TooltipContent.displayName = "TooltipContent"