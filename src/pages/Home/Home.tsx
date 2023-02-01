import { FC } from 'react';
import Header from '../../components/Header';
import TrolaLogo from '../../components/TrolaLogo';
import classes from './Home.module.css';

const Home: FC = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <Header/>
      </div>
      <nav className={classes.sidebar}></nav>
      <main className={classes.main}></main>
    </div>
  );
};

export default Home;
