import React, {FC} from "react";
import {useAuth0} from "@auth0/auth0-react";

const HomePage: FC = () => {

    const auth0 = useAuth0();

    return (
        <div>
            Hello, {auth0.user?.given_name!}
            <button onClick={() => auth0.logout()}>Logout</button>
        </div>
    );
};

export default HomePage;