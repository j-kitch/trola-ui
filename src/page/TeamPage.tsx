import React from "react";
import {useParams} from "react-router";
import {Card, Grid, Sheet, Typography} from "@mui/joy";
import useTeams from "../hook/useTeams";
import useUsers from "../hook/useUsers";
import UserAvatar from "../component/UserAvatar";
import {AvatarGroup, Breadcrumbs} from "@mui/material";
import useBoards from "../hook/useBoards";
import Add from "@mui/icons-material/Add";
import {Link} from "react-router-dom";

type Params = {
    id: string
};

export default function TeamPage() {

    const { id: teamId } = useParams<Params>();
    const teams = useTeams();
    const users = useUsers();
    const boards = useBoards();

    const team = teams.getTeam(teamId!)!;
    const usersInTeam = users.getUsers().filter(u => team.members.some(m => m === u.subject));
    const teamBoards = boards.getBoards().filter(b => b.teamId === teamId);

    console.log(`teamBoards: ${JSON.stringify(teamBoards)}`)
    console.log(`teamBoards: ${teamBoards.length}`)

    return (
        <Sheet sx={{
            alignContent: "center",
            mx: "auto",
            py: 10,
            textAlign: "left",
            width: 1000,
            display: "flex",
            gap: 5,
        }}>
            <Grid container spacing={2} sx={{flexGrow: 1, marginX: "auto"}}>
                <Grid xs={12}>
                    <Breadcrumbs>
                        <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
                        <Link to="/teams" style={{ textDecoration: "none" }}>Team</Link>
                        <Typography>{team.name}</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid xs={8}>
                    <Typography level="h1" textAlign="left">{team.name}</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography textAlign="right">Team Members</Typography>
                    <AvatarGroup sx={{ p:1 }}>
                        {usersInTeam.map((m, i) => <UserAvatar key={i} givenName={m.givenName} familyName={m.surname}/>)}
                    </AvatarGroup>
                </Grid>
                <Grid xs={12}>
                    <Typography level="h3" textAlign="left">Boards</Typography>
                </Grid>
                {
                    teamBoards.map(b => (
                        <Grid xs={4} key={b.id}>
                            <Card variant="outlined" sx={{height: '150px'}}>
                                <Typography level="h5" textAlign="left">{b.name}</Typography>
                            </Card>
                        </Grid>
                    ))
                }
                <Grid xs={4}>
                    <Card variant="soft" sx={{
                        height: '150px',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Add/>
                        <Typography level="body1">Create a new board</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Sheet>
    );
}