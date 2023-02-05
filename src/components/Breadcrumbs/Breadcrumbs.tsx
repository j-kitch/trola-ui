import { FC, MouseEventHandler, ReactElement, ReactNode } from "react";
import classes from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
    children: ReactElement[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {

    const elements = children.flatMap(breadcrumb => [breadcrumb, <span>/</span>]);
    elements.pop();

    return (
        <div className={classes.breadcrumbs}>{elements}</div>
    );
};

interface BreadcrumbProps {
    title: string
    onClick?: MouseEventHandler<HTMLDivElement>
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title, onClick }) => {
    return (
        <div onClick={onClick} className={classes.breadcrumb}>{title}</div>
    );
};

export { Breadcrumbs, Breadcrumb };