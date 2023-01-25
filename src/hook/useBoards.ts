import {useContext, useState} from "react";
import {Board, BoardContext} from "../context/BoardContext";

export default function useBoards() {

    const [boards, _] = useContext(BoardContext);

    function getBoard(teamId: string, boardId: string): Board | null {
        return boards.find(b => b.id === boardId && b.teamId === teamId) || null
    }

    return {
        getBoards: () => boards,
        getBoard,
    };
}