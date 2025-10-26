import * as React from "react"
import { cn } from "../../utils/cn"

interface HoverCardContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const HoverCardContext = React.createContext<HoverCardContextType>({
  open: false,
  onOpenChange: () => {}
})

interface HoverCardProps {
  children: React.ReactNode
}

const HoverCard = ({ children }: HoverCardProps) => {
  const [open, setOpen] = React.useState(false)
  
  return (
    <HoverCardContext.Provider value={{ open, onOpenChange: setOpen }}>
      <div className="relative inline-block">
        {children}
      </div>
    </HoverCardContext.Provider>
  )
}

const HoverCardTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const { onOpenChange } = React.useContext(HoverCardContext)
  
  return (
    <div
      ref={ref}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </div>
  )
})
HoverCardTrigger.displayName = "HoverCardTrigger"

const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { align?: "start" | "center" | "end"; sideOffset?: number }
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  const { open } = React.useContext(HoverCardContext)
  
  if (!open) return null
  
  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        "top-full mt-1",
        align === "start" && "left-0",
        align === "center" && "left-1/2 -translate-x-1/2",
        align === "end" && "right-0",
        className
      )}
      style={{ marginTop: sideOffset }}
      {...props}
    />
  )
})
HoverCardContent.displayName = "HoverCardContent"

export { HoverCard, HoverCardTrigger, HoverCardContent }