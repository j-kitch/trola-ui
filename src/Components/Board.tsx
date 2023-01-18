import React from "react";
import {useParams} from "react-router";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function Board() {
    const {id} = useParams();
    return (
        <div>
            <Typography>This is the board {id}</Typography>
            <Link to="/boards">
                <Typography>Go back to boards</Typography>
            </Link>
        </div>
    );
}