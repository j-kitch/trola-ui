import React, {useState} from "react";
import Add from "@mui/icons-material/Add";
import {Button, Card, FormControl, FormLabel, Input, Sheet} from "@mui/joy";
import useBoards from "../../hook/useBoards";
import {useParams} from "react-router";

type Params = {
    teamId: string,
    boardId: string
};

export default function NewTicketList() {

    const boards = useBoards();
    const {teamId, boardId} = useParams<Params>();

    const [openNewList, setOpenNewList] = useState(false);
    const [newListName, setNewListName] = useState("");

    const onCreateList = (create: boolean) => {
        if (create) {
            boards.addList(teamId!, boardId!, newListName);
        }
        setOpenNewList(false);
        setNewListName("");
    };

    return (
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
                        <Input placeholder="List Name" value={newListName}
                               onChange={event => setNewListName(event.target.value)}/>
                    </FormControl>
                    <Sheet variant="soft"
                           sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                        <Button color="neutral" onClick={() => onCreateList(false)}>Cancel</Button>
                        <Button color="primary" onClick={() => onCreateList(true)}>Create</Button>
                    </Sheet>
                </>
            )}
        </Card>
    );
}