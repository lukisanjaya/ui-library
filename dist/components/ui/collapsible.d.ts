import * as React from "react";
interface CollapsibleProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}
declare const Collapsible: ({ open, onOpenChange, children }: CollapsibleProps) => import("react/jsx-runtime").JSX.Element;
declare const CollapsibleTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
