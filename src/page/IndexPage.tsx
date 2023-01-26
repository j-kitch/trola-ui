import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router";

export default function IndexPage() {

    const {isAuthenticated} = useAuth0();

    if (isAuthenticated) {
        return (<Navigate to="/user"/>);
    }

    return (<Navigate to="/welcome"/>);
}