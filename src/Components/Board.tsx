import React from "react";
import {useParams} from "react-router";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import BoardState from "../State/BoardState";

function Board() {

    const {id} = useParams();

    const board = BoardState.find(b => b.id === id)!;

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
                        <Box sx={{ background: "#aaaaaa", display: "flex", flexDirection: "column" }}>
                            <Typography>{list.name}</Typography>
                            {list.cards.map(card => (
                                <Card>
                                    <CardContent>
                                        {card.title}
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default withAuthenticationRequired(Board);