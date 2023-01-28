import React, {FC, useEffect, useState} from "react";
import LoginButton from "./LoginButton";
import {delay} from "../../utility/time";

const WelcomePage: FC = () => {

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
    );
};

export default WelcomePage;