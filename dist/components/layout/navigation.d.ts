import * as React from "react";
interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
declare const Navigation: React.ForwardRefExoticComponent<NavigationProps & React.RefAttributes<HTMLElement>>;
interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    active?: boolean;
}
declare const NavItem: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLAnchorElement>>;
export { Navigation, NavItem };
