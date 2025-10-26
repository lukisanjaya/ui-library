import * as React from "react";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
export { Sidebar };
