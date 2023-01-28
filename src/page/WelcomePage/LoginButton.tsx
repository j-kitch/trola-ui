import React, {FC} from "react";
import {useAuth0} from "@auth0/auth0-react";

interface Props {
    isVisible: boolean
}

const LoginButton: FC<Props> = ({isVisible}) => {

    const auth0 = useAuth0();

    const onLogin = () => {
        auth0.loginWithPopup({

        });
    };

    const visibleClass = isVisible ? "opacity-100" : "opacity-0";

    return (
        <button onClick={onLogin}
                className={`text-gray-100 text-lg border-gray-200 w-1/2
                            border-2 border-gray-100 border-opacity-30 hover:border-white
                            hover:bg-white hover:text-blue-600 transition-all
                            bg-opacity-50 rounded-2xl
                            transition-opacity ease-in-out duration-1000 ${visibleClass}`}>
            Login or Sign Up
        </button>
    );
};

export default LoginButton;