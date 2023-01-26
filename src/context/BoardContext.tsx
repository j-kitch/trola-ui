import {createContext, Dispatch, SetStateAction, useState} from "react";

const defaultBoards: Board[] = [
    {
        teamId: "foo-team-1",
        name: "Kanban Boy 1",
        id: "kanban-boy-1",
        lists: [
            {
                name: "Todo",
                id: "todo",
                tickets: [
                    {
                        title: "Implement Markdown support",
                        id: "implement-markdown-support",
                        createdBy: "google-oauth2|109062243924481937759",
                        body: "I am a ticket"
                    },
                    {
                        title: "Implement Markdown support",
                        id: "implement-markdown-support-2",
                        createdBy: "google-oauth2|109062243924481937759",
                        body: "I am a ticket"
                    }
                ]
            },
            {
                name: "Todo 2",
                id: "todo-2",
                tickets: [
                    {
                        title: "Implement Markdown support",
                        id: "implement-markdown-support-3",
                        createdBy: "google-oauth2|109062243924481937759",
                        body: "I am a ticket"
                    }
                ]
            }
        ]
    }
];

type Board = {
    teamId: string,
    name: string,
    id: string,
    lists: List[],
};

type List = {
    name: string,
    id: string,
    tickets: Ticket[],
};

type Ticket = {
    title: string,
    body: string,
    id: string,
    createdBy: string
};

const BoardContext = createContext<[Board[], Dispatch<SetStateAction<Board[]>>]>([[], () => {}]);

interface Props {
    children: any,
}

function BoardProvider({ children }: Props) {

    const state = useState(defaultBoards);

    return (
        <BoardContext.Provider value={state}>
            {children}
        </BoardContext.Provider>
    )
}

export { BoardContext, BoardProvider };

export type { Board, List, Ticket };