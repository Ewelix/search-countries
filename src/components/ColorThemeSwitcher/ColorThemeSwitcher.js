import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { Wrapper } from "./ColorThemeSwitcher.styles";
import {useDarkModeContext} from "../../providers/darkModeProvider";

const ColorThemeSwitcher = () => {
    const { mode } = useDarkModeContext();

    return (
        <Wrapper>
            {mode === 'dark'? <FaMoon /> : <FaRegMoon />}
             Dark Mode
        </Wrapper>
    );
};

export default ColorThemeSwitcher;