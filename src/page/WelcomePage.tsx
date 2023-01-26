import React from "react";
import {Box, Button, Typography} from "@mui/joy";
import useLanguage from "../hook/language";
import {useAuth0} from "@auth0/auth0-react";

export default function WelcomePage() {

    const language = useLanguage();
    const auth0 = useAuth0();

    return (
        <Box sx={{
            alignContent: "center",
            mx: "auto",
            py: 20,
            textAlign: "center",
            width: 600,
            display: "flex",
            flexDirection: "column",
            gap: 5,
        }}>
            <Typography level="h1" sx={{ height: 160 }}>
                Say <Typography color="primary">{language.hello}</Typography> to the future of project
                management, <br/> <Typography color="primary">{language.today}!</Typography>
            </Typography>
            <Button variant="soft" onClick={() => auth0.loginWithPopup()}>
                Sign up for free
            </Button>
        </Box>
    );
}