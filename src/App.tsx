import React from 'react';
import {Container} from "@mui/material";
import LoadingBackdrop from "./Components/LoadingBackdrop";
import {NavBar} from "./Components/NavBar";

const App: React.FC = () => {
    return (
        <Container>
            <LoadingBackdrop/>
            <NavBar/>
        </Container>
    );
};

export default App;