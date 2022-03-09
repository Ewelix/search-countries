import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { Button } from "./ColorThemeSwitcher.styles";
import { useDarkModeContext } from "../../providers/darkModeProvider";

const ColorThemeSwitcher = () => {
    const { mode, toggleMode } = useDarkModeContext();

    const handleClick = () => {
        toggleMode(mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button onClick={handleClick}>
            {mode === 'dark'? <FaMoon /> : <FaRegMoon />}
             Dark Mode
        </Button>
    );
};

export default ColorThemeSwitcher;