import React, {useState} from "react";
import {Ticket} from "../../context/BoardContext";
import {Button, Input, Modal, ModalClose, ModalDialog, Sheet, Stack, Textarea, Typography} from "@mui/joy";
import useBoards from "../../hook/useBoards";
import {useParams} from "react-router";

interface Props {
    ticket: Ticket
    isOpen: boolean,
    onClose: () => void,
}

type Params = {
    teamId: string,
    boardId: string,
};

export default function TicketModal({ticket, isOpen, onClose}: Props) {

    const {teamId, boardId} = useParams<Params>();
    const boards = useBoards();

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(ticket.title);
    const [body, setBody] = useState(ticket.body);

    const onCancel = () => {
        setIsEditing(false);
        setTitle(ticket.title);
        setBody(ticket.body);
    };

    const onSave = () => {
        const newTicket = { ...ticket, title, body };
        boards.editTicket(teamId!, boardId!, newTicket);
        setIsEditing(false);
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalDialog sx={{width: "700px"}}>
                <ModalClose/>
                <Stack>
                    <Stack sx={{gap: 1, height: "300px"}}>
                        {!isEditing && (
                            <>
                                <Typography level="h4">{ticket.title}</Typography>
                                <Typography>{ticket.body}</Typography>
                            </>
                        )}
                        {isEditing && (
                            <>
                                <Input value={title} onChange={e => setTitle(e.target.value)}/>
                                <Textarea minRows={9} value={body} onChange={e => setBody(e.target.value)}/>
                            </>
                        )}
                    </Stack>
                    <Sheet sx={{display: "flex", justifyContent: "end", flexGrow: 1, gap: 2}}>
                        {!isEditing && (
                            <Button variant="soft" sx={{width: "200px"}}
                                    onClick={() => setIsEditing(true)}>
                                Edit
                            </Button>
                        )}
                        {isEditing && (
                            <>
                                <Button variant="soft" sx={{width: "200px"}} onClick={onCancel}>
                                    Cancel
                                </Button>
                                <Button variant="solid" sx={{width: "200px"}} onClick={onSave}>
                                    Save
                                </Button>
                            </>
                        )}
                    </Sheet>
                </Stack>
            </ModalDialog>
        </Modal>
    );
}