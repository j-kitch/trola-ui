import {Card, Grid, Typography} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import React, {useState} from "react";
import {List} from "../../context/BoardContext";
import NewTicketModal from "./NewTicketModal";

interface ListProps {
    list: List,
    idx: number,
}

export default function TicketList({list, idx}: ListProps) {

    const [openTicketModal, setOpenTicketModal] = useState<number | null>(null);

    return (
        <Grid xs={3} key={list.id}>
            <NewTicketModal idx={idx} openTicketModal={openTicketModal} setOpenTicketModal={setOpenTicketModal}/>
            <Card variant="soft" sx={{minHeight: '100px', display: "flex", gap: 2}}>
                <Typography level="h5">{list.name}</Typography>
                {list.tickets.map((ticket, idx) => (
                    <Card variant="outlined" sx={{height: '100px'}} key={`${list.id}${ticket.id}`}>
                        <Typography>{ticket.title}</Typography>
                    </Card>
                ))}
                <Card variant="outlined" sx={{
                    height: '50px',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }} onClick={() => setOpenTicketModal(idx)}>
                    <Add/>
                </Card>
            </Card>
        </Grid>
    );
}