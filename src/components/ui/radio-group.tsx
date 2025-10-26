import * as React from "react"
import { Circle } from "lucide-react"
import { cn } from "../../utils/cn"

interface RadioGroupContextType {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
}

const RadioGroupContext = React.createContext<RadioGroupContextType>({})

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, name, ...props }, ref) => {
    return (
      <RadioGroupContext.Provider value={{ value, onValueChange, name }}>
        <div className={cn("grid gap-2", className)} {...props} ref={ref} />
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value: itemValue, ...props }, ref) => {
    const { value, onValueChange, name } = React.useContext(RadioGroupContext)
    const isChecked = value === itemValue

    return (
      <div className="flex items-center space-x-2">
        <input
          ref={ref}
          type="radio"
          name={name}
          value={itemValue}
          checked={isChecked}
          onChange={() => onValueChange?.(itemValue)}
          className="sr-only"
          {...props}
        />
        <div
          className={cn(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
            className
          )}
          onClick={() => onValueChange?.(itemValue)}
        >
          {isChecked && (
            <div className="flex items-center justify-center h-full">
              <Circle className="h-2.5 w-2.5 fill-current text-current" />
            </div>
          )}
        </div>
      </div>
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }