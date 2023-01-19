import {useState} from "react";

export default function useBoards() {

    const defaultBoards = [
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
                        }
                    ]
                }
            ]
        }
    ];

    const [boards, _] = useState(defaultBoards);

    return {
        getBoards: () => boards,
    };
}