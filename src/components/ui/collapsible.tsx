import * as React from "react"

interface CollapsibleContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CollapsibleContext = React.createContext<CollapsibleContextType>({
  open: false,
  onOpenChange: () => {}
})

interface CollapsibleProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Collapsible = ({ open, onOpenChange, children }: CollapsibleProps) => {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isOpen = open !== undefined ? open : internalOpen
  const setOpen = onOpenChange || setInternalOpen

  return (
    <CollapsibleContext.Provider value={{ open: isOpen, onOpenChange: setOpen }}>
      {children}
    </CollapsibleContext.Provider>
  )
}

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
  const { onOpenChange, open } = React.useContext(CollapsibleContext)
  
  return (
    <button
      ref={ref}
      onClick={(e) => {
        onOpenChange(!open)
        onClick?.(e)
      }}
      {...props}
    />
  )
})
CollapsibleTrigger.displayName = "CollapsibleTrigger"

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { open } = React.useContext(CollapsibleContext)
  
  if (!open) return null
  
  return <div ref={ref} className={className} {...props} />
})
CollapsibleContent.displayName = "CollapsibleContent"

export { Collapsible, CollapsibleTrigger, CollapsibleContent }