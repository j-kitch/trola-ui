import React, {FC} from "react";
import {User} from "../hooks/useApi";

const initials = (words: Array<string>): string => words
    .filter(word => word.length > 0)
    .map(word => word[0])
    .join('');

interface Props {
    user: User
}

const Avatar: FC<Props> = ({ user }) => (
    <div className="bg-blue-600 w-9 h-9 flex justify-center items-center rounded-full text-white">
        {initials([user.givenName, user.familyName])}
    </div>
);

export default Avatar;