import * as React from "react";
export interface TooltipProps {
    children: React.ReactNode;
}
export declare const Tooltip: ({ children }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}
export declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipTriggerProps & React.RefAttributes<HTMLDivElement>>;
export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;
