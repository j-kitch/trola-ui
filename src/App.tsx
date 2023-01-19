import React from "react";
import {CssBaseline, CssVarsProvider, Typography} from "@mui/joy";
import Root from "./layout/Root";
import Header from "./layout/Header";
import Main from "./layout/Main";
import theme from "./theme";
import AppBar from "./component/AppBar";
import WelcomePage from "./page/WelcomePage";

export default function App() {
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline/>
            <Root>
                <Header>
                    <AppBar/>
                </Header>
                <Main>
                    <WelcomePage/>
                </Main>
            </Root>
        </CssVarsProvider>
    );
}