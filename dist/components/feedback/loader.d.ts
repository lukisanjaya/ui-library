import * as React from "react";
interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    text?: string;
    size?: "sm" | "md" | "lg";
}
declare const Loader: React.ForwardRefExoticComponent<LoaderProps & React.RefAttributes<HTMLDivElement>>;
export { Loader };
