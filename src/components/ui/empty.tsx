import * as React from "react"
import { cn } from "../../utils/cn"

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, title, description, icon, action, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50",
          className
        )}
        {...props}
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          {icon || (
            <svg
              className="h-10 w-10 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          )}
        </div>
        <div className="mx-auto max-w-[420px] text-center">
          <h3 className="mt-4 text-lg font-semibold">
            {title || "No data found"}
          </h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            {description || "There are no items to display at the moment."}
          </p>
          {action}
        </div>
        {children}
      </div>
    )
  }
)
Empty.displayName = "Empty"

export { Empty }