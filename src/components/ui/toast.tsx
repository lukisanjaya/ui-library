import * as React from "react"
import { cn } from "../../utils/cn"

interface ToastProps {
  title?: string
  description?: string
  variant?: 'default' | 'destructive' | 'success'
  onClose?: () => void
}

export function Toast({ title, description, variant = 'default', onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50 w-full max-w-sm rounded-lg border p-4 shadow-lg",
      {
        'bg-background border-border': variant === 'default',
        'bg-destructive text-destructive-foreground border-destructive': variant === 'destructive',
        'bg-green-500 text-white border-green-600': variant === 'success'
      }
    )}>
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm opacity-90">{description}</div>}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-xs opacity-70 hover:opacity-100"
      >
        ×
      </button>
    </div>
  )
}