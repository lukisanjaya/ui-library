import * as React from "react";
interface HoverCardProps {
    children: React.ReactNode;
}
declare const HoverCard: ({ children }: HoverCardProps) => import("react/jsx-runtime").JSX.Element;
declare const HoverCardTrigger: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const HoverCardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
    sideOffset?: number;
} & React.RefAttributes<HTMLDivElement>>;
export { HoverCard, HoverCardTrigger, HoverCardContent };
