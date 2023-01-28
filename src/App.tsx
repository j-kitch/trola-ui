import React, {FC, useEffect, useState} from 'react';
import LoginButton from "./LoginButton";
import {Auth0Provider} from "@auth0/auth0-react";

const delay = (millis: number) => new Promise<void>(resolve => setTimeout(resolve, millis));

const App: FC = () => {

    const delayTimeout = 1000;

    const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    useEffect(() => {
        delay(delayTimeout)
            .then(() => setIsWelcomeVisible(true))
            .then(() => delay(delayTimeout))
            .then(() => setIsLoginVisible(true));
    }, []);

    const opacityClass = isWelcomeVisible ? "opacity-100" : "opacity-0";

    return (
        <Auth0Provider
            domain="dev-cstaap57nsxcjdlq.us.auth0.com"
            clientId="02HOjjGMw6pMZpmxg2b3ZZU3uGcJ11HT"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <div
                className="flex h-screen w-screen bg-gradient-to-br from-cyan-400 to-blue-600 justify-center items-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-white text-7xl">
                        <span className={`${opacityClass} transition-opacity ease-in-out duration-1000`}>
                            Welcome to Trolá!
                        </span>
                    </h1>
                    <LoginButton isVisible={isLoginVisible}/>
                </div>
            </div>
        </Auth0Provider>
    );
};

export default App;
