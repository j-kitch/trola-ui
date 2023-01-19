import React from "react";
import {Button, Sheet, Typography} from "@mui/joy";
import {Link} from "react-router-dom";

export default function NotFoundPage() {

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
                I'm sorry, we couldn't find the page you're looking for. 😔
            </Typography>
            <Link to="/">
                <Button variant="soft">
                    Return to home
                </Button>
            </Link>
        </Sheet>
    );
}