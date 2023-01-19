import React from "react";
import {Sheet, Typography} from "@mui/joy";

export default function BoardsPage() {
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
                These are your current boards.
            </Typography>
        </Sheet>
    );
}