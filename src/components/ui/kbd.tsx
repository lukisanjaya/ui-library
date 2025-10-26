import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/cn"

const kbdVariants = cva(
  "inline-flex items-center justify-center rounded border border-border bg-muted px-1.5 py-1 font-mono text-xs font-medium text-muted-foreground shadow-sm",
  {
    variants: {
      size: {
        sm: "h-5 min-w-[20px] text-[10px]",
        default: "h-6 min-w-[24px] text-xs",
        lg: "h-7 min-w-[28px] text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ size, className }))}
        {...props}
      />
    )
  }
)
Kbd.displayName = "Kbd"

export { Kbd, kbdVariants }