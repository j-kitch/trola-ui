import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Sheet, Typography} from "@mui/joy";

export default function UserPage() {
    const auth0 = useAuth0();

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
                Hello, {auth0.user?.given_name}
            </Typography>
        </Sheet>
    );
}