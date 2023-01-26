import React from "react";
import {Box, BoxProps} from "@mui/joy";

export default function Header(props: BoxProps) {
    return (
        <Box {...props} component="header" sx={{
            py: 2,
            px: 3,
            g: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gridColumns: "1 / -1",
            borderBottom: "1px solid",
            borderColor: "divider",
            position: "sticky",
            top: 0,
            zIndex: 1100,
        }}/>
    );
}