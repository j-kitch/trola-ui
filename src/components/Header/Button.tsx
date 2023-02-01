import { FC } from 'react';
import classes from './Header.module.css';

interface Props {
  children: string
}

const Button: FC<Props> = ({ children }) => {
  return <div className={classes.button}>{children}</div>;
};

export default Button;
