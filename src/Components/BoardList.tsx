import React from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function BoardList() {
    return (
        <div>
            <Typography>Boards List</Typography>
            <Link to="/boards/10">
                <Typography>Go to board 10</Typography>
            </Link>
        </div>
    );
}