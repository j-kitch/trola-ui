import React from "react";
import {useParams} from "react-router";
import useBoards from "../../hook/useBoards";
import {Grid, Sheet, Typography} from "@mui/joy";
import TicketList from "./TicketList";
import NewTicketList from "./NewTicketList";
import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd";

type Params = {
    teamId: string
    boardId: string
};

export default function BoardPage() {

    const {teamId, boardId} = useParams<Params>();

    const boards = useBoards();
    const board = boards.getBoard(teamId!, boardId!)!;

    const onDragEnd = (result: DropResult) => {
        if (result.reason === "CANCEL" || !result.destination) {
            return;
        }
        if (result.type === "list") {
            const destinationIndex = result.destination?.index!;
            const listId = result.draggableId;
            boards.moveList(teamId!, boardId!, listId, destinationIndex);
        } else if (result.type === 'ticket') {
            const ticketId = result.draggableId;
            const sourceId = result.source.droppableId;
            const sourceIndex = result.source.index;
            const destinationId = result.destination?.droppableId!;
            const destinationIndex = result.destination?.index;
            boards.moveTicket(teamId!, boardId!, ticketId, sourceId, sourceIndex, destinationId, destinationIndex);
        }
    };

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
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='board' type='list' direction='horizontal'>
                    {(provided) => (
                        <Grid container spacing={2} sx={{flexGrow: 1, marginX: "auto"}} ref={provided.innerRef} {...provided.droppableProps}>
                            <Grid xs={12}>
                                <Typography level="h2">{board.name}</Typography>
                            </Grid>
                            {board.lists.map((list, idx) => (<TicketList key={list.id} list={list} idx={idx}/>))}
                            {provided.placeholder}
                            <Grid xs={3}>
                                <NewTicketList/>
                            </Grid>
                        </Grid>
                    )}
                </Droppable>
            </DragDropContext>
        </Sheet>
    );
}