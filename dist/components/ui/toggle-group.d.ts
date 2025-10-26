import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const toggleGroupVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toggleGroupVariants> {
    type: "single" | "multiple";
    value: string | string[];
    onValueChange: (value: string | string[]) => void;
}
declare const ToggleGroup: React.ForwardRefExoticComponent<ToggleGroupProps & React.RefAttributes<HTMLDivElement>>;
interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof toggleVariants> {
    value: string;
}
declare const ToggleGroupItem: React.ForwardRefExoticComponent<ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
export { ToggleGroup, ToggleGroupItem };
