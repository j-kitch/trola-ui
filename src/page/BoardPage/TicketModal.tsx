import React, {useState} from "react";
import {Ticket} from "../../context/BoardContext";
import {
    Button,
    Grid,
    Input,
    Modal,
    ModalClose,
    ModalDialog, Option,
    Select,
    Sheet,
    Stack,
    Textarea,
    Typography
} from "@mui/joy";
import useBoards from "../../hook/useBoards";
import {useParams} from "react-router";
import theme from "../../theme";

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

    const board = boards.getBoard(teamId!, boardId!)!;
    const list = board.lists.find(l => l.tickets.some(t => t.id === ticket.id))!;

    const [listId, setListId] = useState(list.id);

    const onCancel = () => {
        setIsEditing(false);
        setTitle(ticket.title);
        setBody(ticket.body);
    };

    const onSave = () => {
        const newTicket = {...ticket, title, body};
        boards.editTicket(teamId!, boardId!, listId, newTicket);
        setIsEditing(false);
    };

    const onModalClose = () => {
        onCancel();
        onClose();
    };

    return (
        <Modal open={isOpen} onClose={onModalClose}>
            <ModalDialog sx={{width: "700px"}}>
                <ModalClose/>
                <Grid container spacing={2}>
                    <Grid xs={10}>
                        <Stack>
                            <Stack sx={{height: "300px"}}>
                                {!isEditing && (
                                    <Stack m={1}>
                                        <Typography level="h4">{ticket.title}</Typography>
                                        <Typography level="body2">in list {list.name}</Typography>
                                        <Typography sx={{paddingTop: 3}}>{ticket.body}</Typography>
                                    </Stack>
                                )}
                                {isEditing && (
                                    <>
                                        <Input variant="plain" value={title}
                                               sx={{fontSize: theme.fontSize.xl2}}
                                               onChange={e => setTitle(e.target.value)}/>
                                        <Select variant="plain" defaultValue={listId} value={listId} onChange={(_, value) => setListId(String(value))}>
                                            {board.lists.map((list, idx) => (
                                                <Option key={list.id} value={list.id}>{list.name}</Option>
                                            ))}
                                        </Select>
                                        <Textarea variant="plain" minRows={9} value={body} onChange={e => setBody(e.target.value)}/>
                                    </>
                                )}
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid xs={2} sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                        gap: 1,
                    }}>
                            {!isEditing && (
                                <Button variant="soft"
                                        onClick={() => setIsEditing(true)}>
                                    Edit
                                </Button>
                            )}
                            {isEditing && (
                                <>
                                    <Button variant="soft" onClick={onCancel}>
                                        Cancel
                                    </Button>
                                    <Button variant="solid" onClick={onSave}>
                                        Save
                                    </Button>
                                </>
                            )}
                    </Grid>
                </Grid>
            </ModalDialog>
        </Modal>
    );
}