import React from "react";
import {Button, Typography} from "@mui/joy";
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";

export default function AppBar() {

    const auth0 = useAuth0();

    return (
        <>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Typography level="h4" component="h1">Trolá</Typography>
            </Link>
            {!auth0.isAuthenticated && <Button onClick={() => auth0.loginWithPopup()}>
                Login
            </Button>}
            {auth0.isAuthenticated && <Button onClick={() => auth0.logout()}>
                Logout
            </Button>}
        </>
    );
}