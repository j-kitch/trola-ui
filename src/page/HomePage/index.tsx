import React, {FC, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useQuery} from "react-query";
import useApi from "../../hooks/useApi";
import {useNavigate} from "react-router";

const HomePage: FC = () => {

    const auth0 = useAuth0();
    const api = useApi();
    const userQuery = useQuery("currentUser", api.findUserBySubject(auth0.user?.sub || ''));
    const navigate = useNavigate();

    useEffect(() => {
        if (userQuery.isSuccess && userQuery.data === null) {
            navigate("/sign-up");
        }
    }, [userQuery]);

    return (
        <>
            <div>Hello user ${userQuery.data?.givenName}</div>
            <button onClick={() => auth0.logout()}>Logout</button>
        </>
    );
};

export default HomePage;