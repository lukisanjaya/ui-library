import * as React from "react";
interface Column<T> {
    id: string;
    header: string;
    accessorKey?: keyof T;
    cell?: (row: T) => React.ReactNode;
}
interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    searchKey?: string;
    searchPlaceholder?: string;
}
export declare function DataTable<T extends Record<string, any>>({ columns, data, searchKey, searchPlaceholder, }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
