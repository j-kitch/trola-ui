import React from 'react';
import {Box, Container, Toolbar} from "@mui/material";
import LoadingBackdrop from "./Components/LoadingBackdrop";
import {NavBar} from "./Components/NavBar";
import Router from "./Components/Router";

export default function App() {
    return (
        <Container>
            <LoadingBackdrop/>
            <NavBar/>
            <Box sx={{p: 3}}>
                <Toolbar/>
                <Router/>
            </Box>
        </Container>
    );
}