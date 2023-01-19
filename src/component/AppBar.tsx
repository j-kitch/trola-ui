import React from "react";
import {Button, Typography} from "@mui/joy";

export default function AppBar() {
    return (
        <>
            <Typography level="h4" component="h1">Trolá</Typography>
            <Button>
                Login
            </Button>
        </>
    );
}