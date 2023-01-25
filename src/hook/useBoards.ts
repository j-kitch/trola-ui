import {useContext, useState} from "react";
import {Board, BoardContext, Ticket} from "../context/BoardContext";
import {v4} from "uuid";

export default function useBoards() {

    const [boards, setBoards] = useContext(BoardContext);

    function getBoard(teamId: string, boardId: string): Board | null {
        return boards.find(b => b.id === boardId && b.teamId === teamId) || null
    }

    function addTicket(teamId: string, boardId: string, listIndex: number, ticket: Ticket) {
        console.log(`addTicket(${JSON.stringify({teamId, boardId, listIndex, ticket})})`)
        setBoards(oldBoards => {
            let board = oldBoards.find(b => b.id === boardId && b.teamId === teamId)!;
            board.lists[listIndex].tickets.push(ticket);
            return oldBoards;
        });
    }

    function addList(teamId: string, boardId: string, listName: string) {
        console.log(`addList(${teamId}, ${boardId}, ${listName})`);
        setBoards(oldBoards => {
            let board = oldBoards.find(b => b.id === boardId && b.teamId === teamId)!;
            board.lists.push({
                id: v4(),
                name: listName,
                tickets: [],
            });
            return oldBoards;
        })
    }

    return {
        getBoards: () => boards,
        getBoard,
        addTicket,
        addList,
    };
}