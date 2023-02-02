import { FC } from "react";
import classes from './SideBar.module.css';

const SideBar: FC = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.project}>
                <div className={classes.key}>
                    AB
                </div>
                <div className={classes.projectName}>
                    Foo Project
                </div>
            </div>
            <div className={`${classes.option} ${classes.activeOption}`}>Board</div>
            <div className={classes.option}>Docs</div>
            <div className={classes.option}>Settings</div>
        </div>
    );
};

export default SideBar;