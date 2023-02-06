import { FC } from 'react';
import classes from "./Avatar.module.css";

interface Props {
  name: string[];
}

const Avatar: FC<Props> = ({ name }) => {
  const initials = name
    .filter((word) => word.length > 0)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

    return <div className={classes.avatar}>{initials}</div>;
};

export default Avatar;