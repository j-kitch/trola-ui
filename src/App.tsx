import React from "react";
import {CssBaseline, CssVarsProvider} from "@mui/joy";
import Root from "./layout/Root";
import Header from "./layout/Header";
import Main from "./layout/Main";
import theme from "./theme";
import AppBar from "./component/AppBar";
import WelcomePage from "./page/WelcomePage";
import {Auth0Provider} from "@auth0/auth0-react";
import {auth0Configuration} from "./configuration/auth0";
import UserPage from "./page/UserPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "./page/NotFoundPage";
import ErrorPage from "./page/ErrorPage";
import IndexPage from "./page/IndexPage";
import NavigateToHome from "./component/NavigateToHome";
import TeamsPage from "./page/TeamsPage";
import BoardsPage from "./page/BoardsPage";
import TeamPage from "./page/TeamPage";

export default function App() {
    return (
        <CssVarsProvider theme={theme}>
            <Auth0Provider {...auth0Configuration}>
                <BrowserRouter>
                    <CssBaseline/>
                    <Root>
                        <Header>
                            <AppBar/>
                        </Header>
                        <NavigateToHome/>
                        <Main>
                            <Routes>
                                <Route index element={<IndexPage/>} errorElement={<ErrorPage/>}/>
                                <Route path="/welcome" element={<WelcomePage/>} errorElement={<ErrorPage/>}/>
                                <Route path="/user" element={<UserPage/>} errorElement={<ErrorPage/>}/>
                                <Route path="/teams" element={<TeamsPage/>} errorElement={<ErrorPage/>}/>
                                <Route path="/teams/:id" element={<TeamPage/>} errorElement={<ErrorPage/>}/>
                                <Route path="/boards" element={<BoardsPage/>} errorElement={<ErrorPage/>}/>
                                <Route path="*" element={<NotFoundPage/>} errorElement={<ErrorPage/>}/>
                            </Routes>
                        </Main>
                    </Root>
                </BrowserRouter>
            </Auth0Provider>
        </CssVarsProvider>
    );
}