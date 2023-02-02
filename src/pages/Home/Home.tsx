import { FC } from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import TrolaLogo from '../../components/TrolaLogo';
import classes from './Home.module.css';

const Home: FC = () => {
  return (
    <Layout.Base>
        <Layout.Header>
            <Header/>
        </Layout.Header>
        <Layout.SideBar>

        </Layout.SideBar>
        <Layout.Main>
            <h1>Hello World</h1>
        </Layout.Main>
    </Layout.Base>
  );
};

export default Home;
