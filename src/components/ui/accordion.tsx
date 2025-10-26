import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../utils/cn"

const AccordionContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
  type?: "single" | "multiple"
}>({})

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  value?: string
  onValueChange?: (value: string) => void
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", value, onValueChange, ...props }, ref) => (
    <AccordionContext.Provider value={{ value, onValueChange, type }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </AccordionContext.Provider>
  )
)
Accordion.displayName = "Accordion"

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-b", className)} {...props} />
  )
)
AccordionItem.displayName = "AccordionItem"

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  )
)
AccordionTrigger.displayName = "AccordionTrigger"

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("overflow-hidden text-sm transition-all", className)}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
)
AccordionContent.displayName = "AccordionContent"