import { default as React } from 'react';
interface LayoutProps {
    children: React.ReactNode;
    isAuthenticated?: boolean;
    isLoading?: boolean;
    user?: any;
    onLogout?: () => void;
    menuItems?: any[];
}
export declare function Layout({ children, isAuthenticated, isLoading, user, onLogout, menuItems }: LayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
