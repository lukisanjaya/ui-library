interface AppNavbarProps {
    onToggleSidebar?: () => void;
    user?: any;
    onLogout?: () => void;
    theme?: 'light' | 'dark';
    onThemeChange?: (theme: 'light' | 'dark') => void;
    notifications?: any[];
}
export declare function AppNavbar({ onToggleSidebar, user, onLogout, theme, onThemeChange, notifications }: AppNavbarProps): import("react/jsx-runtime").JSX.Element;
export {};
