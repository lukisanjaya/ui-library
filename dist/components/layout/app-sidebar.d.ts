interface MenuItem {
    label: string;
    href: string;
    icon: string;
    badge?: string;
    children?: MenuItem[];
}
interface AppSidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
    menuItems?: MenuItem[];
    user?: any;
    onLogout?: () => void;
    currentPath?: string;
}
export declare function AppSidebar({ isCollapsed, onToggle, menuItems, user, onLogout, currentPath }: AppSidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
