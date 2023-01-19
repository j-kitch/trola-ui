import React from "react";
import {Avatar, AvatarGroup, Card, Grid, Sheet, Typography} from "@mui/joy";
import Add from "@mui/icons-material/Add";

export default function TeamsPage() {
    return (
        <Sheet sx={{
            alignContent: "center",
            mx: "auto",
            py: 10,
            textAlign: "center",
            width: 1000,
            display: "flex",
            gap: 5,
        }}>
            <Grid container spacing={2} sx={{flexGrow: 1, marginX: "auto"}}>
                <Grid xs={12}>
                    <Typography level="h3" textAlign="left">Your Teams</Typography>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{ height: '150px'}}>
                        <Typography level="h5" textAlign="left">Team Foo</Typography>
                        <Typography level="body2" textAlign="left">
                            5 active boards
                        </Typography>
                        <AvatarGroup sx={{ pt: 2 }}>
                            <Avatar>AB</Avatar>
                            <Avatar>CD</Avatar>
                            <Avatar>EF</Avatar>
                            <Avatar>+3</Avatar>
                        </AvatarGroup>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{ height: '150px'}}>
                        <Typography level="h5" textAlign="left">Team Bar</Typography>
                        <Typography level="body2" textAlign="left">
                            5 active boards
                        </Typography>
                        <AvatarGroup sx={{ pt: 2 }}>
                            <Avatar>AB</Avatar>
                            <Avatar>CD</Avatar>
                            <Avatar>EF</Avatar>
                            <Avatar>+3</Avatar>
                        </AvatarGroup>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{ height: '150px', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <Add/>
                        <Typography level="body1">Create a new team</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Sheet>
    );
}