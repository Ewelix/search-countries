import React from 'react';
import Dashboard from "./Dashboard/Dashboard";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle.js'
import { theme } from '../assets/styles/theme';

const Root = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Dashboard/>
            </ThemeProvider>
        </>
    );
};

export default Root;