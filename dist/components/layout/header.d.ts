import * as React from "react";
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export { Header };
