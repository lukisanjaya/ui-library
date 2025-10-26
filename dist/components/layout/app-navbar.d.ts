interface AppNavbarProps {
    onToggleSidebar?: () => void;
    user?: any;
    onLogout?: () => void;
    notifications?: any[];
}
export declare function AppNavbar({ onToggleSidebar, user, onLogout, notifications }: AppNavbarProps): import("react/jsx-runtime").JSX.Element;
export {};
