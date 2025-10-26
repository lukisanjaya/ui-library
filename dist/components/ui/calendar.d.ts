interface CalendarProps {
    selected?: Date;
    onSelect?: (date: Date | undefined) => void;
    showOutsideDays?: boolean;
    className?: string;
}
declare function Calendar({ className, selected, onSelect, showOutsideDays, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };
