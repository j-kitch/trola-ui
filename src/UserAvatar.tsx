import React, {MouseEventHandler} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Avatar} from "@mui/material";

interface Props {
    onClick: MouseEventHandler<HTMLDivElement> | undefined
}

const UserAvatar: React.FC<Props> = ({onClick}) => {

    const {user} = useAuth0();

    if (!user) {
        return (<></>);
    }

    const initials = [user.given_name, user.family_name]
        .filter(word => word && word.length > 0)
        .map(word => word?.charAt(0))
        .join('');

    return (<Avatar src={user.picture} onClick={onClick}>{initials}</Avatar>);
};

export default UserAvatar;