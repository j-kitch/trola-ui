import React, {FC} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useQuery} from "react-query";
import useApi from "../../hooks/useApi";
import {useNavigate} from "react-router";

const HomePage: FC = () => {

    const auth0 = useAuth0();
    const api = useApi();
    const userQuery = useQuery("currentUser", api.findUserBySubject(auth0.user?.sub || ''));
    const navigate = useNavigate();

    if (userQuery.data === null) {
        navigate("/sign-up");
    }

    return (
        <div>Hello user ${userQuery.data?.givenName}</div>
    );
};

export default HomePage;