import React, {useState} from "react";
import {Box, Button, Menu, MenuItem, Typography} from "@mui/joy";
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function AppBar() {

    const auth0 = useAuth0();

    const [menuAnchor, setMenuAnchor] = useState<null | HTMLDivElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setMenuAnchor(null);
    }

    return (
        <>
            <Link to="/" style={{textDecoration: "none"}}>
                <Typography level="h4" component="h1">Trolá</Typography>
            </Link>
            <Box sx={{
                flexGrow: 1,
                p: 6,
                display: "flex",
                flexDirection: "row",
                gap: 5,
            }}>
                {auth0.isAuthenticated && <>
                    <Link to="/teams" style={{textDecoration: "none"}}>
                        <Typography level="body1" component="h2">Teams</Typography>
                    </Link>
                    <Link to="/boards" style={{textDecoration: "none"}}>
                        <Typography level="body1" component="h2">Boards</Typography>
                    </Link>
                </>}
            </Box>
            {!auth0.isAuthenticated && <Button onClick={() => auth0.loginWithPopup()}>
                Login
            </Button>}
            {auth0.isAuthenticated && <UserAvatar givenName={auth0.user?.given_name!}
                                                  familyName={auth0.user?.family_name!}
                                                  onClick={handleClick}/>}
            <Menu open={Boolean(menuAnchor)} onClose={handleClose} anchorEl={menuAnchor}>
                <MenuItem onClick={() => auth0.logout()}>Logout</MenuItem>
            </Menu>
        </>
    );
}