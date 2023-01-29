import React, {FC} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useQuery} from "react-query";
import useApi from "../../hooks/useApi";

const HomePage: FC = () => {

    const auth0 = useAuth0();
    const api = useApi();
    const userQuery = useQuery("currentUser", api.findUserBySubject(auth0.user?.sub || ''));

    if (userQuery.data) {
        return (
            <div>
                Hello, {userQuery.data.givenName}
                <button onClick={() => auth0.logout()}>Logout</button>
            </div>
        )
    }

    return (
        <div>
            Welcome to Trolá, new user!
            <button onClick={() => auth0.logout()}>Logout</button>
        </div>
    );
};

export default HomePage;