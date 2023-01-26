import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router";

export default function NavigateToHome() {
    const {isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/user");
        } else {
            navigate("/welcome");
        }
    }, [isAuthenticated]);

    return (<></>);
}