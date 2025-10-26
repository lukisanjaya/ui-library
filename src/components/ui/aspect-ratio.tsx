import * as React from "react"

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: `${100 / ratio}%`,
        ...style,
      }}
      {...props}
    />
  )
)
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }