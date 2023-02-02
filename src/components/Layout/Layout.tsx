import { FC, ReactNode } from "react";
import classes from "./Layout.module.css";

interface Props {
    children: ReactNode
}

const Base: FC<Props> = ({ children }) => (
    <div className={classes.base}>
        {children}
    </div>
);

const Header: FC<Props> = ({ children }) => (
    <div className={classes.header}>
        {children}
    </div>
);

const SideBar: FC<Props> = ({children}) => (
    <div className={classes.sidebar}>
        {children}
    </div>
);

const Main: FC<Props> = ({children}) => (
    <div className={classes.main}>
        {children}
    </div>
);

const Layout = { Base, Header, SideBar, Main };

export default Layout;