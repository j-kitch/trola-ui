import React, {MouseEventHandler} from "react";
import {Avatar} from "@mui/joy";

interface Props {
    givenName: string
    familyName: string
    onClick: MouseEventHandler<HTMLDivElement>
}

export default function UserAvatar(props: Props) {
    const initials = [props.givenName, props.familyName]
        .map(word => word[0])
        .join('');

    return (
        <Avatar variant="solid"
                alt={`${props.givenName} ${props.familyName}`}
                color="primary"
                onClick={props.onClick}>
            {initials}
        </Avatar>
    );
}