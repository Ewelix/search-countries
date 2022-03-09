import React from 'react';
import CountriesList from "../../components/CountriesList/CountriesList";
import { useDarkModeContext } from '../../providers/darkModeProvider';
import { Wrapper } from "./MainTemplate.styles";
import Header from "../../components/Header/Header";

const MainTemplate = ({children}) => {
    const { mode } = useDarkModeContext();

    return (
        <Wrapper mode={mode}>
            {children}
        </Wrapper>

    );
};

export default MainTemplate;