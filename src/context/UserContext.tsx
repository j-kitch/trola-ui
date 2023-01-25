import {createContext, Dispatch, SetStateAction, useState} from "react";

const defaultUsers = [
    {
        subject: "google-oauth2|109062243924481937759",
        givenName: "Joshua",
        surname: "Kitchen"
    },
    {
        subject: "otherUser",
        givenName: "Scooby",
        surname: "Doo"
    }
];

interface User {
    subject: string,
    givenName: string,
    surname: string
}

const UserContext = createContext<[User[], Dispatch<SetStateAction<User[]>>]>([[], () => {}]);

interface Props {
    children: any
}

function UserProvider({ children }: Props) {

    const state = useState(defaultUsers);

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };