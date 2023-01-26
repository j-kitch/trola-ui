import {Card, Grid, Typography} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import React, {useState} from "react";
import {List} from "../../context/BoardContext";
import NewTicketModal from "./NewTicketModal";
import TicketCard from "./TicketCard";
import {Draggable, Droppable} from "react-beautiful-dnd";

interface ListProps {
    list: List,
    idx: number,
}

export default function TicketList({list, idx}: ListProps) {

    const [openTicketModal, setOpenTicketModal] = useState<boolean>(false);

    return (
        <Draggable draggableId={list.id} index={idx}>
            {(draggableProvided) => (
                <Grid xs={3} key={list.id} ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>
                    <NewTicketModal idx={idx} openTicketModal={openTicketModal}
                                    setOpenTicketModal={setOpenTicketModal}/>
                    <Droppable droppableId={list.id} type='ticket' direction='vertical'>
                        {(droppableProvided) => (
                            <Card variant="soft" sx={{minHeight: '100px', display: "flex", gap: 2}} ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                                <Typography level="h5" {...draggableProvided.dragHandleProps}>{list.name}</Typography>
                                {list.tickets.map((ticket, index) => (
                                    <TicketCard key={`${list.id}${ticket.id}`} ticket={ticket} index={index}/>
                                ))}
                                {droppableProvided.placeholder}
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
                        )}
                    </Droppable>
                </Grid>
            )}
        </Draggable>
    );
}