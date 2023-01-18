import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {Draggable, Droppable} from "react-beautiful-dnd";
import BoardState from "../../State/BoardState";
import Ticket from "./Ticket";

interface Props {
    id: string
    boardId: string
    title: string
    index: number
}

export default function List({boardId, id, title, index}: Props) {

    const list = BoardState.find(b => b.id === boardId)!.lists.find(l => l.id === id)!;

    return (
        <Draggable draggableId={id} index={index}>
            {(listProvided) => (
                <Grid ref={listProvided.innerRef} {...listProvided.draggableProps} item xs={3} sx={{height: 1000}}>
                    <Droppable droppableId={`list-${id}`} type='TICKET' direction="vertical">
                        {(droppableProvided) => (
                            <Box sx={{
                                background: "#aaaaaa",
                                display: "flex",
                                flexDirection: "column"
                            }} ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                                <Typography {...listProvided.dragHandleProps}>{title}</Typography>
                                {list.cards.map((card, idx) => (
                                    <Ticket listId={id} id={card.id} title={card.title} index={idx}/>
                                ))}
                            </Box>
                        )}
                    </Droppable>
                </Grid>
            )}
        </Draggable>
    )
}