import React from 'react';
import CountriesList from "../../components/CountriesList/CountriesList";
import { useDarkModeContext } from '../../providers/darkModeProvider';
import { Wrapper } from "./MainTemplate.styles";

// export const { mode } = useDarkModeContext();

const MainTemplate = () => {
    const { mode } = useDarkModeContext();
    // const themeMode = mode || 'light';
    // console.log(mode, themeMode)

    return (
        <Wrapper>
            <CountriesList/>
        </Wrapper>

    );
};

export default MainTemplate;