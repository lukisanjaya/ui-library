interface Toast {
    id: string;
    title: string;
    description?: string;
    variant?: "default" | "destructive" | "success";
}
export declare function useToast(): {
    toasts: Toast[];
    toast: ({ title, description, variant }: Omit<Toast, "id">) => string;
    dismiss: (id: string) => void;
};
export {};
