import React from 'react';
import CountriesList from "../../components/CountriesList/CountriesList";
import { useDarkModeContext } from '../../providers/darkModeProvider';
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = () => {
    const { mode } = useDarkModeContext();

    return (
        <Wrapper mode={mode}>
            <CountriesList/>
        </Wrapper>

    );
};

export default MainTemplate;