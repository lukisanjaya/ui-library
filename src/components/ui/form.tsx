import * as React from "react"
import { cn } from "../../utils/cn"
import { Label } from "./label"

interface FormContextType {
  errors: Record<string, string>
  values: Record<string, any>
  setValue: (name: string, value: any) => void
  setError: (name: string, error: string) => void
}

const FormContext = React.createContext<FormContextType>({
  errors: {},
  values: {},
  setValue: () => {},
  setError: () => {}
})

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, ...props }, ref) => {
    const [errors, setErrors] = React.useState<Record<string, string>>({})
    const [values, setValues] = React.useState<Record<string, any>>({})

    const setValue = (name: string, value: any) => {
      setValues(prev => ({ ...prev, [name]: value }))
    }

    const setError = (name: string, error: string) => {
      setErrors(prev => ({ ...prev, [name]: error }))
    }

    return (
      <FormContext.Provider value={{ errors, values, setValue, setError }}>
        <form ref={ref} {...props}>
          {children}
        </form>
      </FormContext.Provider>
    )
  }
)
Form.displayName = "Form"

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
))
FormItem.displayName = "FormItem"

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name?: string
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, name, ...props }, ref) => {
    const { errors } = React.useContext(FormContext)
    const hasError = name && errors[name]

    return (
      <Label
        ref={ref}
        className={cn(hasError && "text-destructive", className)}
        {...props}
      />
    )
  }
)
FormLabel.displayName = "FormLabel"

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
)
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
FormDescription.displayName = "FormDescription"

interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  name?: string
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, name, children, ...props }, ref) => {
    const { errors } = React.useContext(FormContext)
    const error = name ? errors[name] : undefined
    const body = error || children

    if (!body) return null

    return (
      <p
        ref={ref}
        className={cn("text-sm font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    )
  }
)
FormMessage.displayName = "FormMessage"

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
}