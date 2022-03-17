import React from 'react';
import { useDarkModeContext } from "../../providers/darkModeProvider";
import { Wrapper } from "./SearchBar.styles";
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchCountries, searchPhrase }) => {
    const { mode } = useDarkModeContext();
    return (
        <Wrapper mode={mode}>
            <input
                type='text'
                placeholder='Search for a country...'
                onChange={(e) => searchCountries(e.target.value)}
                value={searchPhrase}
                name="Search"
                id="Search"/>
            <FaSearch/>
        </Wrapper>
    );
};

export default SearchBar;