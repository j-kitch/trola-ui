import {useAuth0} from "@auth0/auth0-react";
import {AppBar, Avatar, Box, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {MouseEventHandler, useState} from "react";
import {Link} from "react-router-dom";

export function NavBar() {

    const {isAuthenticated, isLoading} = useAuth0();

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography sx={{flex: 1}}>
                        <Link to="/">
                            Tróla
                        </Link>
                    </Typography>
                    {isAuthenticated && <UserDetails/>}
                    {!isAuthenticated && !isLoading && <LoginButton/>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

function LoginButton() {

    const {loginWithPopup} = useAuth0();

    return (
        <Button variant="contained" onClick={() => loginWithPopup()}>Login</Button>
    );
}

function UserDetails() {

    const {user, logout} = useAuth0();
    const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <>
            <Avatar src={user?.picture} onClick={handleClick}/>
            <Menu open={Boolean(anchor)} anchorEl={anchor} onClose={handleClose}>
                <MenuItem onClick={() => logout()}>
                    <Typography>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    );
}