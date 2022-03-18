import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DarkModeProvider from '../providers/darkModeProvider';
import CountryCard from '../components/CountryCard/CountryCard';
import CountriesCard from '../components/CountriesCard/CountriesCard';
import MainTemplate from './MainTemplate/MainTemplate';
import Nav from '../components/Nav/Nav';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle.js';
import { theme } from '../assets/styles/theme';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DarkModeProvider>
          <Nav />
          <MainTemplate>
            <Switch>
              <Route exact path="/">
                <CountriesCard />
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
