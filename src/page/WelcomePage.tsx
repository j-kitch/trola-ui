import React, {useEffect, useState} from "react";
import {Button, Sheet, Typography} from "@mui/joy";
import useLanguage from "../hook/language";

export default function WelcomePage() {

    const language = useLanguage();

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
            <Typography level="h1" sx={{ height: 160 }}>
                Say <Typography color="primary">{language.hello}</Typography> to the future of project
                management, <br/> <Typography color="primary">{language.today}!</Typography>
            </Typography>
            <Button variant="soft">
                Sign up for free
            </Button>
        </Sheet>
    );
}