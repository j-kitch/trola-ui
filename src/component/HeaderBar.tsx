import React, {FC} from "react";
import Avatar from "./Avatar";
import useApi from "../hooks/useApi";
import {useAuth0} from "@auth0/auth0-react";
import {useQuery} from "react-query";

const HeaderBar: FC = () => {

    const api = useApi();
    const auth0 = useAuth0();

    const userQuery = useQuery("user", api.findUserBySubject(auth0.user?.sub!));

    return (
        <header className="fixed h-14 w-screen border-b-2 bg-white
                                flex flex-row gap-8 px-8 items-center">
            <div className="text-2xl">
                Trolá
            </div>
            <div className="flex-grow">
                <div>
                    Projects
                </div>
            </div>
            <Avatar user={userQuery.data!}/>
        </header>
    );
};

export default HeaderBar;