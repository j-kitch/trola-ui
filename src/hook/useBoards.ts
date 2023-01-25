import {useContext, useState} from "react";
import {Board, BoardContext, Ticket} from "../context/BoardContext";

export default function useBoards() {

    const [boards, setBoards] = useContext(BoardContext);

    function getBoard(teamId: string, boardId: string): Board | null {
        return boards.find(b => b.id === boardId && b.teamId === teamId) || null
    }

    function addTicket(teamId: string, boardId: string, listIndex: number, ticket: Ticket) {
        setBoards(oldBoards => {
            let board = oldBoards.find(b => b.id === boardId && b.teamId === teamId)!;
            board.lists[listIndex].tickets.push(ticket);
            return oldBoards;
        });
    }

    return {
        getBoards: () => boards,
        getBoard,
        addTicket,
    };
}