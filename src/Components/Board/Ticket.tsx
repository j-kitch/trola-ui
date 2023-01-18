import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {Draggable} from "react-beautiful-dnd";

interface Props {
    listId: string
    id: string
    title: string
    index: number
}

export default function Ticket({ listId, id, title, index }: Props) {
    return (
        <Draggable draggableId={`ticket-${listId}-${id}`} index={index}>
            {(draggableProvided) => (
                <Card ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                    <CardContent>
                        <Typography>{title}</Typography>
                    </CardContent>
                </Card>
            )}
        </Draggable>
    )
}