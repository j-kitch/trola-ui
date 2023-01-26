import {useContext} from "react";
import {UserContext} from "../context/UserContext";

export default function useUsers() {

    const [users, setUsers] = useContext(UserContext);

    return {
        getUsers: () => users,
    };
}