import React, {useEffect, useState} from 'react';
import { useCombobox } from "downshift";
import { debounce } from "lodash";
import { useDarkModeContext } from "../../providers/darkModeProvider";
import { Wrapper } from "./SearchBar.styles";
import { FaSearch } from 'react-icons/fa';
import useCountries from "../../hooks/useCountries";

const API_URL = 'https://restcountries.com/v2';

const SearchBar = ({input}) => {
    // const [searchPhrase, setSearchPhrase] = useState('');
    // const [matchingCountries, setMatchingCountries] = useState('');
    //
    const { mode } = useDarkModeContext();
    // const { findCountries } = useCountries();
    //
    // const getMatchingCountries = debounce(async (e) => {
    //     const { countries } = await findCountries(searchPhrase);
    //     setMatchingCountries(countries);
    // }, 500);
    //
    // useEffect(() => {
    //     if(!searchPhrase) return;
    //     getMatchingCountries(searchPhrase);
    // }, [searchPhrase, getMatchingCountries]);

    return (
        <>h</>
        // <Wrapper mode={mode}>
        //     <input
        //         type='text'
        //         placeholder='Search for a country...'
        //         onChange={(e) => setMatchingCountries(e.target.value)}
        //         value={searchPhrase}
        //         name="Search"
        //         id="Search"/>
        //     <FaSearch/>
        // </Wrapper>
    );
};

export default SearchBar;