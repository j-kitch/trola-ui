import React from "react";
import {Button, useColorScheme} from "@mui/joy";

export default function LightDarkSwitcher() {

    const {mode, setMode} = useColorScheme();

    const onSwitch = () => {
        const newTheme = mode === 'light' ? 'dark' : 'light';
        setMode(newTheme);
    };

    const buttonText = mode === 'light' ? 'Dark Theme' : 'Light Theme';

    return (
        <Button onClick={onSwitch} sx={{ m: 2 }}>{buttonText}</Button>
    );
}