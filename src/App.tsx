import React, {FC} from 'react';
import {Auth0Provider} from "@auth0/auth0-react";
import WelcomePage from "./page/WelcomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigateToHome from "./component/NavigateToHome";
import HomePage from "./page/HomePage";
import LoadingScreen from "./component/LoadingScreen";
import {QueryClientProvider} from "react-query";
import queryClient from "./utility/queryClient";
import {ReactQueryDevtools} from "react-query/devtools";

const App: FC = () => (
    <Auth0Provider
        domain="dev-cstaap57nsxcjdlq.us.auth0.com"
        clientId="02HOjjGMw6pMZpmxg2b3ZZU3uGcJ11HT"
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: "https://jkitch.com/trola"
        }}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <LoadingScreen/>
                <NavigateToHome/>
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/welcome" element={<WelcomePage/>}/>
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </Auth0Provider>
);
export default App;
