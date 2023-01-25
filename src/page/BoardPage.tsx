import React from "react";
import {useParams} from "react-router";
import useBoards from "../hook/useBoards";
import {Card, Grid, Sheet, Typography} from "@mui/joy";

type Params = {
    teamId: string
    boardId: string
};

export default function BoardPage() {

    const { teamId, boardId } = useParams<Params>();

    const boards = useBoards();
    const board = boards.getBoard(teamId!, boardId!)!;

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
                    <Typography level="h2">{board.name}</Typography>
                </Grid>
                {board.lists.map(list => (
                    <Grid xs={3}>
                        <Card variant="outlined" sx={{minHeight: '100px', display: "flex", gap: 2}}>
                            <Typography level="h5">{list.name}</Typography>
                            {list.tickets.map(ticket => (
                                <Card sx={{height: '100px'}}>
                                    <Typography>{ticket.title}</Typography>
                                </Card>
                            ))}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Sheet>
    );
}