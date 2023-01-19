// TODO: This is a temporary state tool until we have a backend.
import {useState} from "react";

interface Team {
    id: string,
    name: string,
    members: string[],
}

export default function useTeams() {

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

    const [teams, setTeams] = useState<Team[]>(defaultTeams);

    const addTeam = (team: Team) => {
        setTeams(oldTeams => [...oldTeams, team]);
    };

    const getTeam = (id: string) => teams.find(t => t.id === id);

    const getAll = () => teams;

    const findUsersTeams = (userId: string) => teams.filter(t => t.members.some(m => m === userId));

    return { getTeam, getAll, addTeam, findUsersTeams };
}