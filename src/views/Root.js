import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import MainTemplate from "./MainTemplate/MainTemplate";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle.js'
import { theme} from '../assets/styles/theme';
import DarkModeProvider from "../providers/darkModeProvider";
import Nav from "../components/Nav/Nav";
import CountryCard from "../components/CountryCard/CountryCard";
import CountriesList from "../components/CountriesList/CountriesList";
import Header from "../components/Header/Header";

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <DarkModeProvider>
                    <Nav/>
                    <MainTemplate>
                        <Switch>
                            <Route exact path="/">
                                <Header/>
                                <CountriesList/>
                            </Route>
                            <Route path="/country/:code">
                                <CountryCard />
                            </Route>
                        </Switch>
                </MainTemplate>
            </DarkModeProvider>
            </ThemeProvider>
        </Router>
    );
};

export default Root;