import React from 'react';
import {Button, CssBaseline} from "@mui/material";
import {Auth0Provider} from "@auth0/auth0-react";

import Bar from "./Bar";

const App: React.FC = () => {
    return (
        <Auth0Provider domain="dev-cstaap57nsxcjdlq.us.auth0.com"
                       clientId="02HOjjGMw6pMZpmxg2b3ZZU3uGcJ11HT"
                       redirectUri={window.location.origin}>
            <CssBaseline/>
            <Bar/>
            <Button variant="contained">Hello World</Button>
        </Auth0Provider>
    )
};

export default App;