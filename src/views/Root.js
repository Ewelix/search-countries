import React from 'react';
import MainTemplate from "./MainTemplate/MainTemplate";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle.js'
import { theme} from '../assets/styles/theme';
import DarkModeProvider from "../providers/darkModeProvider";

const Root = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <DarkModeProvider>
                    <MainTemplate/>
                </DarkModeProvider>
            </ThemeProvider>
        </>
    );
};

export default Root;