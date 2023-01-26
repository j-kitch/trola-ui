import {Card, Grid, Typography} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import React, {useState} from "react";
import {List} from "../../context/BoardContext";
import NewTicketModal from "./NewTicketModal";
import TicketCard from "./TicketCard";
import {Draggable} from "react-beautiful-dnd";

interface ListProps {
    list: List,
    idx: number,
}

export default function TicketList({list, idx}: ListProps) {

    const [openTicketModal, setOpenTicketModal] = useState<boolean>(false);

    return (
        <Draggable draggableId={list.id} index={idx}>
            {(provided) => (
                <Grid xs={3} key={list.id} ref={provided.innerRef} {...provided.draggableProps}>
                    <NewTicketModal idx={idx} openTicketModal={openTicketModal} setOpenTicketModal={setOpenTicketModal}/>
                    <Card variant="soft" sx={{minHeight: '100px', display: "flex", gap: 2}}>
                        <Typography level="h5" {...provided.dragHandleProps}>{list.name}</Typography>
                        {list.tickets.map((ticket) => (
                            <TicketCard key={`${list.id}${ticket.id}`} ticket={ticket} />
                        ))}
                        <Card variant="outlined" sx={{
                            height: '50px',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }} onClick={() => setOpenTicketModal(true)}>
                            <Add/>
                        </Card>
                    </Card>
                </Grid>
            )}
        </Draggable>
    );
}