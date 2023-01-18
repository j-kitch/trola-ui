import React from "react";
import BoardState from "../../State/BoardState";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Grid, Typography} from "@mui/material";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import {useParams} from "react-router";
import List from "./List";

interface Props {
    id: string
}

export function Board() {

    const { id } = useParams();

    const state = BoardState.find(b => b.id === id)!;

    const onDragEnd = () => {};

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" type="LIST" direction="horizontal">
                {(provided) => (
                    <Grid container xs={12} ref={provided.innerRef} {...provided.droppableProps}>
                        {state.lists.map((list, idx) => (
                            <List index={idx} id={list.id} boardId={id!} title={list.name}/>
                        ))}
                    </Grid>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default withAuthenticationRequired(Board);