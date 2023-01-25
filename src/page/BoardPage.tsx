import React, {useState} from "react";
import {useParams} from "react-router";
import useBoards from "../hook/useBoards";
import {
    Button,
    Card,
    FormControl,
    FormLabel,
    Grid,
    Input,
    Modal,
    ModalClose,
    ModalDialog,
    Sheet,
    Textarea,
    Typography
} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import {useAuth0} from "@auth0/auth0-react";
import {Ticket} from "../context/BoardContext";
import {v4} from "uuid";

type Params = {
    teamId: string
    boardId: string
};

export default function BoardPage() {

    const {teamId, boardId} = useParams<Params>();
    const {user} = useAuth0();

    const boards = useBoards();
    const board = boards.getBoard(teamId!, boardId!)!;

    // Ticket Modal
    const [openTicketModal, setOpenTicketModal] = useState<number | null>(null);
    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketBody, setTicketBody] = useState("");

    // List State
    const [newListName, setNewListName] = useState('');
    const [openNewList, setOpenNewList] = useState(false);

    console.log(`openNewList: ` + openNewList);

    const onCloseTicketModal = () => {
        setOpenTicketModal(null);
        setTicketTitle("");
        setTicketBody("");
    };

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

    const onCreateList = (create: boolean) => {
        if (create) {
            boards.addList(teamId!, boardId!, newListName);
        }
        setOpenNewList(false);
        setNewListName("");
    };

    return (
        <Sheet sx={{
            alignContent: "center",
            mx: "auto",
            py: 10,
            textAlign: "left",
            width: 1000,
            display: "flex",
            gap: 5,
        }}>
            <Grid container spacing={2} sx={{flexGrow: 1, marginX: "auto"}}>
                <Grid xs={12}>
                    <Typography level="h2">{board.name}</Typography>
                </Grid>
                {board.lists.map((list, idx) => {
                    return (
                        <Grid xs={3} key={list.id}>
                            <Modal open={openTicketModal !== null}
                                   onClose={() => onCloseTicketModal()}>
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
                            <Card variant="soft" sx={{minHeight: '100px', display: "flex", gap: 2}}>
                                <Typography level="h5">{list.name}</Typography>
                                {list.tickets.map(ticket => (
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
                })}
                <Grid xs={3}>
                    <Card variant="soft" sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minHeight: '100px',
                        gap: 2,
                        justifyContent: "center"
                    }} onClick={() => {
                        if (!openNewList) {
                            setOpenNewList(true);
                        }
                    }}>
                        {!openNewList && <Add/>}
                        {openNewList && (
                            <>
                                <FormControl>
                                    <FormLabel>New List</FormLabel>
                                    <Input placeholder="List Name" value={newListName} onChange={event => setNewListName(event.target.value)}/>
                                </FormControl>
                                <Sheet variant="soft" sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <Button color="neutral" onClick={() => onCreateList(false)}>Cancel</Button>
                                    <Button color="primary" onClick={() => onCreateList(true)}>Create</Button>
                                </Sheet>
                            </>
                        )}
                    </Card>
                </Grid>
            </Grid>
        </Sheet>
    );
}