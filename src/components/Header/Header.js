import React, { useEffect, useState } from 'react';
import { useDarkModeContext } from "../../providers/darkModeProvider";
import useCountries from './../../hooks/useCountries';
import CountriesList from "../CountriesList/CountriesList";
import Filter from "../Filter/Filter";
import { Wrapper } from "./Header.styles";
import { FaSearch } from "react-icons/fa";
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

const Header = () => {
    const {mode} = useDarkModeContext();
    const [countriesList, setCountriesList] = useState([])
    const [error, setError] = useState('');
    const { getAllCountries, searchByName } = useCountries();
    const [searchPhrase, setSearchPhrase] = useState('');
    let allCountries;

    // Pobranie wszystkich panstw i pierwsze wyswietlenie

    const getCountries = async (e) => {
        allCountries = await getAllCountries();
        setCountriesList(allCountries);
    };

    useEffect(() => {
        getCountries();
    }, [])

    // Search

    const getCountriesNames = async (e) => {
        const countries = await searchByName(searchPhrase);
        setCountriesList(countries);
    };

    useEffect(() => {
        if (!searchPhrase) return;

        getCountriesNames(searchPhrase);
    }, [searchPhrase]);

    // Add search reset

    // Filter

    // const handleSelect = (e) => {
    //     e.target.value === 'none'
    //         ? setCountries(countries)
    //         : setCountries(countries.filter(country => country.region === e.target.value))
    // }

    return (
        <Wrapper mode={mode}>
            <Container>
                <Wrapper mode={mode}>
                    <input
                        type='text'
                        placeholder='Search for a country...'
                        onChange={(e) => setSearchPhrase(e.target.value)}
                        value={searchPhrase}
                        name="Search"
                        id="Search"/>
                    <FaSearch/>
                </Wrapper>
                <Filter/>
            </Container>
            {countriesList ? <CountriesList countries={countriesList}/> : <h2>{error ? error : 'Loading...'}</h2>}
        </Wrapper>
    );
};

export default Header;