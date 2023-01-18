import React from "react";
import {Box, Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const boards = [
    {
        name: "Foo Board",
        description: "I am the description for Foo Board",
        activeCards: 3,
    },
    {
        name: "Bar Board",
        description: "I am the description for Bar Board",
        activeCards: 0,
    }
];

const Boards: React.FC = () => {
    return (
        <Grid container spacing={2}>
            {boards.map(board => (
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h5">{board.name}</Typography>
                                <Typography>{board.description}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={3}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h5">New Board</Typography>
                            <Box>
                                <AddIcon color="disabled" fontSize="large"/>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Boards;