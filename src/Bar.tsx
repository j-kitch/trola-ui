import React, {useState} from "react";
import {AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import UserAvatar from "./UserAvatar";

const Bar: React.FC = () => {

    const auth0 = useAuth0();

    const [anchorElName, setAnchorElName] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElName(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElName(null);
    };

    return (
        <AppBar component="nav">
            <Toolbar>
                <Box sx={{flex: 1}}>
                    <Typography>Tróla</Typography>
                </Box>
                <Box>
                    {auth0.isAuthenticated && <>
                        <UserAvatar onClick={handleOpenUserMenu}/>
                        <Menu open={Boolean(anchorElName)}
                              anchorEl={anchorElName}
                              onClose={handleCloseUserMenu}>
                            <MenuItem>
                                <Typography onClick={() => auth0.logout()}>
                                    Logout
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </>}
                    {!auth0.isAuthenticated && <>
                        <Button variant="contained"
                                onClick={() => auth0.loginWithPopup()}>
                            Login
                        </Button>
                    </>}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Bar;