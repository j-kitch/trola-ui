import { FC } from 'react';
import classes from './Home.module.css';

const Home: FC = () => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <div className={classes['header-logoapp']}>
            <div className={classes['header-logo']}>Tr</div>
            <div className={classes['header-app']}>Trolá</div>
        </div>
        <div className={classes['header-button']}>Projects</div>
        <div className={classes['header-button']}>People</div>
        <div className={classes['header-spacer']}></div>
        <div className={classes['header-button']}>Search</div>
        <div className={classes['header-button']}>Notifications</div>
        <div className={classes['header-button']}>Logout</div>
      </header>
      <nav className={classes.sidebar}></nav>
      <main className={classes.main}></main>
    </div>
  );
};

export default Home;
