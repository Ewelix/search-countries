import React from 'react';
import {useDarkModeContext} from "../../providers/darkModeProvider";
import {Wrapper} from "./Search.styles";
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const { mode } = useDarkModeContext();

    return (
        <Wrapper mode={mode}>
            <input type='text' placeholder='Search for a country...' />
            <FaSearch/>
        </Wrapper>

    );
};

export default Search;