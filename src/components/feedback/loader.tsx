import * as React from "react"
import { cn } from "../../utils/cn"
import { Spinner } from "./spinner"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  size?: "sm" | "md" | "lg"
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, text = "Loading...", size = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-4",
        className
      )}
      {...props}
    >
      <Spinner size={size} />
      {text && (
        <p className="text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  )
)
Loader.displayName = "Loader"

export { Loader }