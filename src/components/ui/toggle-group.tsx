import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/cn"

const toggleGroupVariants = cva(
  "flex items-center justify-center gap-1",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const toggleVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ToggleGroupContextType {
  value: string | string[]
  onValueChange: (value: string | string[]) => void
  type: "single" | "multiple"
}

const ToggleGroupContext = React.createContext<ToggleGroupContextType>({
  value: "",
  onValueChange: () => {},
  type: "single"
})

interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toggleGroupVariants> {
  type: "single" | "multiple"
  value: string | string[]
  onValueChange: (value: string | string[]) => void
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, variant, type, value, onValueChange, ...props }, ref) => (
    <ToggleGroupContext.Provider value={{ value, onValueChange, type }}>
      <div
        ref={ref}
        className={cn(toggleGroupVariants({ variant, className }))}
        {...props}
      />
    </ToggleGroupContext.Provider>
  )
)
ToggleGroup.displayName = "ToggleGroup"

interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof toggleVariants> {
  value: string
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, variant, size, value: itemValue, onClick, ...props }, ref) => {
    const { value, onValueChange, type } = React.useContext(ToggleGroupContext)
    
    const isPressed = type === "single" 
      ? value === itemValue 
      : Array.isArray(value) && value.includes(itemValue)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (type === "single") {
        onValueChange(isPressed ? "" : itemValue)
      } else {
        const currentValue = Array.isArray(value) ? value : []
        if (isPressed) {
          onValueChange(currentValue.filter(v => v !== itemValue))
        } else {
          onValueChange([...currentValue, itemValue])
        }
      }
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        data-state={isPressed ? "on" : "off"}
        onClick={handleClick}
        {...props}
      />
    )
  }
)
ToggleGroupItem.displayName = "ToggleGroupItem"

export { ToggleGroup, ToggleGroupItem }