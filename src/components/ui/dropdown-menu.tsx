import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "../../utils/cn"

const DropdownMenuContext = React.createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}>({ isOpen: false, setIsOpen: () => {} })

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative block text-left">
        {children}
        {isOpen && createPortal(
          <div
            className="fixed inset-0 z-[99998]"
            onClick={() => setIsOpen(false)}
          />,
          document.body
        )}
      </div>
    </DropdownMenuContext.Provider>
  )
}

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, children, asChild, ...props }, ref) => {
  const { setIsOpen } = React.useContext(DropdownMenuContext)
  
  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as any
    return React.cloneElement(children, {
      ...childProps,
      onClick: (e: React.MouseEvent) => {
        childProps.onClick?.(e)
        setIsOpen(true)
      }
    })
  }
  
  return (
    <button
      ref={ref}
      type="button"
      className={cn("inline-flex items-center cursor-pointer", className)}
      onClick={() => setIsOpen(true)}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { align?: "start" | "end"; side?: "top" | "bottom" }
>(({ className, align = "start", side = "bottom", ...props }, ref) => {
  const { isOpen } = React.useContext(DropdownMenuContext)
  
  if (!isOpen) return null
  
  const content = (
    <div
      ref={ref}
      className={cn(
        "fixed z-[99999] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        align === "end" ? "right-2 sm:right-4" : "left-2 sm:left-4",
        side === "top" ? "top-16" : "bottom-16",
        className
      )}
      {...props}
    />
  )
  
  return createPortal(content, document.body)
})
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = "DropdownMenuLabel"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
}