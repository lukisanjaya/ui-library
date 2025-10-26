import * as React from "react"
import { cn } from "../../utils/cn"

interface InputOTPProps {
  value?: string
  onChange?: (value: string) => void
  maxLength?: number
  className?: string
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  ({ className, value = "", onChange, maxLength = 6, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value)
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

    const currentValue = value || internalValue
    const setValue = onChange || setInternalValue

    const handleChange = (index: number, digit: string) => {
      if (digit.length > 1) digit = digit.slice(-1)
      
      const newValue = currentValue.split('')
      newValue[index] = digit
      const result = newValue.join('').slice(0, maxLength)
      
      setValue(result)
      
      if (digit && index < maxLength - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === 'Backspace' && !currentValue[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {Array.from({ length: maxLength }).map((_, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={currentValue[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="h-10 w-10 text-center border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        ))}
      </div>
    )
  }
)
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      className
    )}
    {...props}
  />
))
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <div className="w-2 h-2 rounded-full bg-border" />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }