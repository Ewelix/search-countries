import React from 'react';
import ColorThemeSwitcher from "../ColorThemeSwitcher/ColorThemeSwitcher";
import {useDarkModeContext} from "../../providers/darkModeProvider";
import { Wrapper } from "./Nav.styles";
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

const Nav = () => {
    const { mode } = useDarkModeContext();

    return (
        <Wrapper mode={mode}>
            <Container>
                <h1>Where in the world?</h1>
                <ColorThemeSwitcher/>
            </Container>
        </Wrapper>
    );
};

export default Nav;