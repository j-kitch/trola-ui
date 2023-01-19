import React from "react";
import {Sheet, Typography} from "@mui/joy";
import {useRouteError} from "react-router";

export default function ErrorPage() {

    const error = useRouteError();

    return (
        <Sheet sx={{
            alignContent: "center",
            mx: "auto",
            py: 20,
            textAlign: "center",
            width: 600,
            display: "flex",
            flexDirection: "column",
            gap: 5,
        }}>
            <Typography level="h1" sx={{height: 160}}>
                I'm sorry, there was an error: {String(error)}
            </Typography>
        </Sheet>
    );
}