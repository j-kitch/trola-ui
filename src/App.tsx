import React from 'react';
import {Box, Container, CssBaseline, Toolbar, Typography} from "@mui/material";
import {Auth0Provider} from "@auth0/auth0-react";

import Bar from "./Bar";
import Boards from "./Boards";

const App: React.FC = () => {
    return (
        <Auth0Provider domain="dev-cstaap57nsxcjdlq.us.auth0.com"
                       clientId="02HOjjGMw6pMZpmxg2b3ZZU3uGcJ11HT"
                       redirectUri={window.location.origin}>
            <CssBaseline/>
            <Container>
                <Box>
                    <Bar/>
                    <Box component="main" sx={{p: 3}}>
                        <Toolbar/>
                        <Boards />
                    </Box>
                </Box>
            </Container>
        </Auth0Provider>
    )
};

export default App;