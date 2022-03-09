import React from 'react';
import CountriesList from "../../components/CountriesList/CountriesList";
import Nav from "../../components/Nav/Nav";
import { useDarkModeContext } from '../../providers/darkModeProvider';
import { Wrapper } from "./MainTemplate.styles";
import Header from "../../components/Header/Header";

const MainTemplate = () => {
    const { mode } = useDarkModeContext();

    return (
        <Wrapper mode={mode}>
            <Nav/>
            <Header/>
            <CountriesList/>
        </Wrapper>

    );
};

export default MainTemplate;