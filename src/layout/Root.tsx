import React from "react";
import {Box, BoxProps} from "@mui/joy";

export default function Root(props: BoxProps) {
    return (
        <Box {...props} sx={{
            display: "grid",
            gridTemplateRows: "64px 1fr",
            minHeight: "100vh"
        }}/>
    );
}