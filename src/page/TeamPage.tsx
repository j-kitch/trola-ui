import React from "react";
import {useParams} from "react-router";
import {Grid, Sheet, Typography} from "@mui/joy";
import useTeams from "../hook/useTeams";

type Params = {
    id: string
};

export default function TeamPage() {

    const { id: teamId } = useParams<Params>();
    const teams = useTeams();

    const team = teams.getTeam(teamId!)!;

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
                    <Typography level="h3" textAlign="left">{team.name}</Typography>
                </Grid>
            </Grid>
        </Sheet>
    );
}