import {useContext, useState} from "react";
import {Board, BoardContext, List, Ticket} from "../context/BoardContext";
import {v4} from "uuid";
import produce from "immer";

export default function useBoards() {

    const [boards, setBoards] = useContext(BoardContext);

    function getBoard(teamId: string, boardId: string): Board | null {
        return boards.find(b => b.id === boardId && b.teamId === teamId) || null
    }

    function addTicket(teamId: string, boardId: string, listIndex: number, ticket: Ticket) {
        setBoards(produce(boards => {
            let board = boards.find(b => b.id === boardId && b.teamId === teamId)!;
            board.lists[listIndex].tickets.push(ticket);
        }));
    }

    function editTicket(teamId: string, boardId: string, listId: string, ticket: Ticket) {
        setBoards(produce(boards => {
            let board = boards.find(b => b.teamId === teamId && b.id === boardId)!;
            let oldList = board.lists.find(l => l.tickets.some(t => t.id === ticket.id))!;
            let oldTicket = oldList.tickets.find(t => t.id === ticket.id)!;

            oldTicket.title = ticket.title;
            oldTicket.body = ticket.body;

            if (oldList.id !== listId) {
                const oldTicketIndex = oldList.tickets.findIndex(t => t.id === ticket.id);
                oldList.tickets.splice(oldTicketIndex, 1);
                const newList = board.lists.find(l => l.id === listId)!;
                newList.tickets.push(oldTicket);
            }
        }));
    }

    function addList(teamId: string, boardId: string, listName: string) {
        setBoards(produce(oldBoards => {
            let board = oldBoards.find(b => b.id === boardId && b.teamId === teamId)!;
            board.lists.push({
                id: v4(),
                name: listName,
                tickets: [],
            });
        }));
    }

    function moveList(teamId: string, boardId: string, listId: string, destinationIndex: number) {
        setBoards(produce(boards => {
            const board = boards.find(b => b.teamId === teamId && b.id === boardId)!;
            const sourceIndex = board.lists.findIndex(l => l.id === listId);
            const removedList = board.lists.splice(sourceIndex, 1);
            board.lists.splice(destinationIndex, 0, ...removedList);
        }));
    }

    function moveTicket(teamId: string, boardId: string, ticketId: string, sourceId: string, sourceIndex: number, destinationId: string, destinationIndex: number) {
        setBoards(produce(boards => {
            const board = boards.find(b => b.teamId === teamId && b.id === boardId)!;
            const sourceList = board.lists.find(l => l.id === sourceId)!;
            const destinationList = board.lists.find(l => l.id === destinationId)!;
            const removedTicket = sourceList.tickets.splice(sourceIndex, 1);
            destinationList.tickets.splice(destinationIndex, 0, ...removedTicket);
        }));
    }

    return {
        getBoards: () => boards,
        getBoard,
        addTicket,
        editTicket,
        addList,
        moveList,
        moveTicket,
    };
}