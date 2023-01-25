import React, {Dispatch, SetStateAction, useState} from "react";
import {Button, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Textarea, Typography} from "@mui/joy";
import {Ticket} from "../../context/BoardContext";
import {v4} from "uuid";
import useBoards from "../../hook/useBoards";
import {useAuth0} from "@auth0/auth0-react";
import {useParams} from "react-router";

interface Props {
    idx: number,
    openTicketModal: number | null,
    setOpenTicketModal: Dispatch<SetStateAction<number | null>>
}

type Params = {
    teamId: string,
    boardId: string,
};

export default function NewTicketModal({idx, openTicketModal, setOpenTicketModal}: Props) {

    const {user} = useAuth0();
    const boards = useBoards();
    const {teamId, boardId} = useParams<Params>();

    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketBody, setTicketBody] = useState("");

    const onCreateTicket = (listIndex: number) => {
        const ticket: Ticket = {
            title: ticketTitle,
            body: ticketBody,
            createdBy: user?.sub!,
            id: v4(),
        };

        boards.addTicket(teamId!, boardId!, listIndex, ticket);
        onCloseTicketModal();
    };

    const onCloseTicketModal = () => {
        setOpenTicketModal(null);
        setTicketTitle("");
        setTicketBody("");
    };

    return (
        <Modal open={openTicketModal !== null} onClose={() => onCloseTicketModal()}>
            <ModalDialog sx={{width: "700px"}}>
                <ModalClose/>
                <Typography level="h3">Create a new ticket</Typography>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input placeholder="Ticket Title"
                           value={ticketTitle}
                           onChange={event => setTicketTitle(event.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Body</FormLabel>
                    <Textarea minRows={12}
                              placeholder="Ticket Description"
                              value={ticketBody}
                              onChange={event => setTicketBody(event.target.value)}/>
                </FormControl>
                <Button variant="solid" onClick={() => onCreateTicket(idx)}>Create</Button>
            </ModalDialog>
        </Modal>
    );
}