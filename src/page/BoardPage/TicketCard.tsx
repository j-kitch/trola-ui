import React from "react";
import {Card, Typography} from "@mui/joy";
import {Ticket} from "../../context/BoardContext";

interface Params {
    ticket: Ticket
}

export default function TicketCard({ ticket }: Params) {
    return (
        <Card variant="outlined" sx={{height: '100px'}}>
            <Typography>{ticket.title}</Typography>
        </Card>
    );
}