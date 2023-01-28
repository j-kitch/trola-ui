import React, {FC, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router";

const NavigateToHome: FC = () => {

    const auth0 = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth0.isAuthenticated) {
            navigate("/home");
        } else if (!auth0.isLoading) {
            navigate("/welcome");
        }
    }, [auth0]);

    return (<></>);
};

export default NavigateToHome;