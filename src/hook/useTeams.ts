// TODO: This is a temporary state tool until we have a backend.
import {useContext, useState} from "react";
import {v4} from "uuid";
import {TeamContext} from "../context/TeamContext";

interface Team {
    id: string,
    name: string,
    members: string[],
}

export default function useTeams() {

    const [teams, setTeams] = useContext(TeamContext);

    const addTeam = (team: Team) => {
        team.id = v4();
        console.log(`Old Teams: ${JSON.stringify(teams)}`);
        const updatedTeams = [...teams, {...team}];
        console.log(`New Teams: ${JSON.stringify(updatedTeams)}`);
        setTeams(updatedTeams);
    };

    const getTeam = (id: string) => {
        return teams.find(t => t.id === id);
    };

    const getAll = () => {
        return teams;
    };

    const findUsersTeams = (userId: string) => {
        console.log(`current teams are ${JSON.stringify(teams)}`);
        return teams.filter(t => t.members.some(m => m === userId));
    }

    return {getTeam, getAll, addTeam, findUsersTeams};
}