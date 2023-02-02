import { FC } from 'react';
import Board from '../../components/Board';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import TrolaLogo from '../../components/TrolaLogo';
import classes from './Home.module.css';

const Home: FC = () => {
  return (
    <Layout.Base>
        <Layout.Header>
            <Header/>
        </Layout.Header>
        <Layout.SideBar>
            <SideBar/>
        </Layout.SideBar>
        <Layout.Main>
            <Board/>
        </Layout.Main>
    </Layout.Base>
  );
};

export default Home;
