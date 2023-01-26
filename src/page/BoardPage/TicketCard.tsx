import React from "react";
import {Card, Typography} from "@mui/joy";
import {Ticket} from "../../context/BoardContext";
import {Draggable} from "react-beautiful-dnd";

interface Params {
    ticket: Ticket,
    index: number,
}

export default function TicketCard({ ticket, index }: Params) {
    return (
        <Draggable draggableId={ticket.id} index={index}>
            {(provided) => (
                <Card variant="outlined" sx={{height: '100px'}} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Typography>{ticket.title}</Typography>
                </Card>
            )}
        </Draggable>
    );
}