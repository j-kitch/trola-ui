import React from "react";
import {useParams} from "react-router";
import useBoards from "../hook/useBoards";
import {Grid, Sheet, Typography} from "@mui/joy";
import TicketList from "./BoardPage/TicketList";
import NewTicketList from "./BoardPage/NewTicketList";

type Params = {
    teamId: string
    boardId: string
};

export default function BoardPage() {

    const {teamId, boardId} = useParams<Params>();

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
                {board.lists.map((list, idx) => (<TicketList key={list.id} list={list} idx={idx}/>))}
                <Grid xs={3}>
                    <NewTicketList/>
                </Grid>
            </Grid>
        </Sheet>
    );
}