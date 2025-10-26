interface ComboboxProps {
    options: {
        value: string;
        label: string;
    }[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    className?: string;
}
export declare function Combobox({ options, value, onValueChange, placeholder, searchPlaceholder, emptyText, className, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export {};
