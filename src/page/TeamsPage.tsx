import React from "react";
import {AvatarGroup, Breadcrumbs, Card, Grid, Sheet, Typography} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import useUsers from "../hook/useUsers";
import useTeams from "../hook/useTeams";
import UserAvatar from "../component/UserAvatar";

export default function TeamsPage() {

    const {user} = useAuth0();
    const users = useUsers();
    const teams = useTeams();

    const usersTeams = teams.findUsersTeams(user?.sub!);
    const userUsers = users.getUsers();

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
                    <Breadcrumbs>
                        <Link to="/" style={{textDecoration: "none"}}>Home</Link>
                        <Typography>Teams</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid xs={12}>
                    <Typography level="h3" textAlign="left">Your Teams</Typography>
                </Grid>
                {
                    usersTeams.map(team => (
                        <Grid xs={4} key={team.id}>
                            <Link to={`/teams/${team.id}`} style={{textDecoration: "none"}}>
                                <Card variant="outlined" sx={{height: '150px'}}>
                                    <Typography level="h5" textAlign="left">{team.name}</Typography>
                                    <Typography level="body2" textAlign="left">
                                        5 active boards
                                    </Typography>
                                    <AvatarGroup sx={{pt: 2}}>
                                        {team.members.map(m => userUsers.find(u => u.subject === m)!)
                                            .map(m => <UserAvatar key={m.subject} givenName={m.givenName}
                                                                  familyName={m.surname}/>)}
                                    </AvatarGroup>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
                <Grid xs={4}>
                    <Link to="/teams/new" style={{ textDecoration: "none" }}>
                        <Card variant="soft" sx={{
                            height: '150px',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Add/>
                            <Typography level="body1">Create a new team</Typography>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </Sheet>
    );
}