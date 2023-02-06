import { FC, ReactNode, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import classes from './Header.module.css';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>('button', () =>
    setIsDropdownShowing(false)
  );

  const onOpenDropdown = () => setIsDropdownShowing(!isDropdownShowing);

  const dropdownClasses = `${classes.dropdown} ${
    isDropdownShowing ? classes.show : ''
  }`;

  return (
    <div className={classes.button} ref={dropdownRef}>
      <button onClick={onOpenDropdown}>{children}</button>
      <div className={dropdownClasses}>
        <a href="/a">Link 1</a>
        <a href="/b">Link 2</a>
        <a href="/c">Link 3</a>
      </div>
    </div>
  );
};

export default Button;
