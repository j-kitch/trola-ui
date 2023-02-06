import { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import classes from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  children: ReactElement[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
  const elements = children.flatMap((breadcrumb, i) => [
    breadcrumb,
    <span key={i * children.length + children.length + 1}>/</span>,
  ]);
  elements.pop();

  return <div className={classes.breadcrumbs}>{elements}</div>;
};

interface BreadcrumbProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title, onClick }) => {
  return <div onClick={onClick}>{title}</div>;
};

export { Breadcrumbs, Breadcrumb };
