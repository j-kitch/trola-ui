import {createContext, Dispatch, SetStateAction, useState} from "react";

interface Team {
    id: string,
    name: string,
    members: string[],
}

const defaultTeams = [
    {
        id: "foo-team-1",
        name: "Foo Team",
        members: ["google-oauth2|109062243924481937759", "otherUser"]
    },
    {
        id: "bar-team-2",
        name: "Bar Team",
        members: ["google-oauth2|109062243924481937759", "otherUser"]
    },
    {
        id: "zar-team-1",
        name: "Zar Team",
        members: ["otherUser"]
    }
];

const TeamContext = createContext<[Team[], Dispatch<SetStateAction<Team[]>>]>([[], () => {
}]);

interface Props {
    children: any
}

function TeamProvider({children}: Props) {

    const state = useState(defaultTeams);

    return (
        <TeamContext.Provider value={state}>
            {children}
        </TeamContext.Provider>
    )
}

export {TeamContext, TeamProvider};