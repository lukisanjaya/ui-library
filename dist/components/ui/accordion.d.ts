import * as React from "react";
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: "single" | "multiple";
    value?: string;
    onValueChange?: (value: string) => void;
}
export declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
export declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const AccordionContent: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
