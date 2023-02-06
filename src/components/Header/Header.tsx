import { FC } from 'react';
import TrolaLogo from '../TrolaLogo';
import Button from './Button';
import classes from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={classes.container}>
      <div className={classes.application}>
        <TrolaLogo />
        <div className={classes['application-text']}>Trolá</div>
      </div>

      <Button>Projects</Button>
      <Button>People</Button>
      <div className={classes.spacer}></div>
      <Button>Search</Button>
      <Button>Notifications</Button>
      <Button>Logout</Button>
    </header>
  );
};

export default Header;
