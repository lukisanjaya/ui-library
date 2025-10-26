import * as React from "react"
import { cn } from "../../utils/cn"

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, ...props }, ref) => (
    <input
      type="range"
      ref={ref}
      className={cn(
        "flex h-6 w-full cursor-pointer appearance-none items-center rounded-lg bg-gray-200 outline-none dark:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer",
        className
      )}
      {...props}
    />
  )
)
Slider.displayName = "Slider"