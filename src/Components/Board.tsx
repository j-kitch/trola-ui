import React from "react";
import {useParams} from "react-router";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import BoardState from "../State/BoardState";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

function Board() {

    const {id} = useParams();

    const board = BoardState.find(b => b.id === id)!;

    const onDragEnd = () => {
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>{board.name}</Typography>
                    <Link to="/boards">
                        <Typography>Back to boards</Typography>
                    </Link>
                </Grid>
                {board.lists.map(list => (
                    <Grid item xs={3}>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <div>
                                <Droppable droppableId={`droppable-${list.id}`}>
                                    {
                                        (provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                <Box sx={{
                                                    background: "#aaaaaa",
                                                    display: "flex",
                                                    flexDirection: "column"
                                                }}>
                                                    <Typography>{list.name}</Typography>
                                                    {list.cards.map((card, idx) => (
                                                        <Draggable draggableId={`draggable-${card.id}`} index={idx}
                                                                   key={idx}>
                                                            {(provided) => (
                                                                <div ref={provided.innerRef}
                                                                     {...provided.draggableProps}
                                                                     {...provided.dragHandleProps}>
                                                                    <Card>
                                                                        <CardContent>
                                                                            {card.title}
                                                                        </CardContent>
                                                                    </Card>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                </Box>
                                            </div>
                                        )
                                    }
                                </Droppable>
                            </div>
                        </DragDropContext>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default withAuthenticationRequired(Board);