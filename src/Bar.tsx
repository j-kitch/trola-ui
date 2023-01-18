import React, {useState} from "react";
import {AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";

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
        <AppBar>
            <Toolbar>
                <Box sx={{flex: 1}}>
                    <Typography>Tróla</Typography>
                </Box>
                <Box>
                    {auth0.isAuthenticated && <>
                        <Typography onClick={handleOpenUserMenu}>
                            Hello {auth0.user!.given_name}
                        </Typography>
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