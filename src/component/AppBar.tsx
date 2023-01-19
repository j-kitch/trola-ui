import React from "react";
import {Button, Typography} from "@mui/joy";
import {useAuth0} from "@auth0/auth0-react";

export default function AppBar() {

    const auth0 = useAuth0();

    return (
        <>
            <Typography level="h4" component="h1">Trolá</Typography>
            <Button onClick={() => auth0.loginWithPopup()}>
                Login
            </Button>
        </>
    );
}