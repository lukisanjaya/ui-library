interface ToastProps {
    title?: string;
    description?: string;
    variant?: 'default' | 'destructive' | 'success';
    onClose?: () => void;
}
export declare function Toast({ title, description, variant, onClose }: ToastProps): import("react/jsx-runtime").JSX.Element;
export {};
