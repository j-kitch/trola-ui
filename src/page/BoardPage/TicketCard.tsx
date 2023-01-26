import React, {useState} from "react";
import {Card, Typography} from "@mui/joy";
import {Ticket} from "../../context/BoardContext";
import {Draggable} from "react-beautiful-dnd";
import TicketModal from "./TicketModal";
import {isObject} from "util";

interface Params {
    ticket: Ticket,
    index: number,
}

export default function TicketCard({ ticket, index }: Params) {

    const [openModal, setOpenModal] = useState(false);

    const onModalOpen = () => {
        if (!openModal) {
            setOpenModal(true);
        }
    };

    const onModalClose = () => setOpenModal(false);

    return (
        <Draggable draggableId={ticket.id} index={index}>
            {(provided) => (
                <Card variant="outlined" sx={{height: '100px'}}
                      ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={onModalOpen}>
                    <TicketModal ticket={ticket} isOpen={openModal} onClose={onModalClose}/>
                    <Typography>{ticket.title}</Typography>
                </Card>
            )}
        </Draggable>
    );
}