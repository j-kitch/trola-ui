import React, {FC} from 'react';
import {Auth0Provider} from "@auth0/auth0-react";
import WelcomePage from "./page/WelcomePage";

const App: FC = () => (
    <Auth0Provider
        domain="dev-cstaap57nsxcjdlq.us.auth0.com"
        clientId="02HOjjGMw6pMZpmxg2b3ZZU3uGcJ11HT"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
        <WelcomePage/>
    </Auth0Provider>
);
export default App;
