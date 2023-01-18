import React from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {withAuthenticationRequired} from "@auth0/auth0-react";

function BoardList() {
    return (
        <div>
            <Typography>Boards List</Typography>
            <Link to="/boards/10">
                <Typography>Go to board 10</Typography>
            </Link>
        </div>
    );
}

export default withAuthenticationRequired(BoardList);