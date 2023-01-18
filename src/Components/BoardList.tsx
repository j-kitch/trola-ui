import React from "react";
import {Box, Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import Boards from "../State/BoardState";
import AddIcon from "@mui/icons-material/Add";

function BoardList() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>These are your current boards.</Typography>
                </Grid>
                {Boards.map(board => (
                    <Grid item xs={3}>
                        <Card>
                            <Link to={`/boards/${board.id}`}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography>{board.name}</Typography>
                                        <Typography>
                                            {board.activeCards > 0 && `There are ${board.activeCards} tickets that require your attention.`}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={3}>
                    <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>Create a new board</Typography>
                                    <Typography>
                                        <AddIcon fontSize="large"/>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default withAuthenticationRequired(BoardList);