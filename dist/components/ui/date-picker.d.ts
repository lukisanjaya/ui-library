interface DatePickerProps {
    date?: Date;
    onDateChange?: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
}
export declare function DatePicker({ date, onDateChange, placeholder, className, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
