import * as React from "react";
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
declare const FormItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    name?: string;
}
declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps & React.RefAttributes<HTMLLabelElement>>;
interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const FormControl: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLDivElement>>;
declare const FormDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    name?: string;
}
declare const FormMessage: React.ForwardRefExoticComponent<FormMessageProps & React.RefAttributes<HTMLParagraphElement>>;
export { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, };
