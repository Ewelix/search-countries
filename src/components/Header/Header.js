import React, { useEffect, useState } from 'react';
import { useDarkModeContext } from "../../providers/darkModeProvider";
import CountriesList from "../CountriesList/CountriesList";
import Filter from "../Filter/Filter";
import SearchBar from "../Search/SearchBar";
import { Wrapper } from "./Header.styles";
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

const BASE_URL = 'https://restcountries.com/v2';

const Header = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const { mode } = useDarkModeContext();

    const getAllCountries = async () => {
        try {
            const res = await fetch(`${BASE_URL}/all`)
            const data = await res.json();
            setCountries(data);
            setIsLoading(false);
        } catch(err) {
            setError(err)
        }
    };

    useEffect(() => {
        getAllCountries();
    }, [])

    // Search countries by name
    const searchCountries = (searchInput) => {
        setSearchPhrase(searchInput);

        if (searchPhrase) {
            const filtered = countries.filter(country =>
                Object.values(country.name)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            )
            setFilteredCountries(filtered)
        } else {
            setFilteredCountries(countries)
        }
    }

    return (
        <>
            {isLoading ? (
                <h2>{error ? 'Sorry, something went wrong...' : 'Loading...'}</h2>
            ) : (
                <Wrapper mode={mode}>
                    <Container>
                        <SearchBar
                            searchCountries={searchCountries}
                            searchPhrase={searchPhrase}
                        />
                        <Filter/>
                    </Container>
                {searchPhrase.length > 0 ? (
                    <CountriesList countries={filteredCountries}/>
                    ) : (
                    <CountriesList countries={countries}/>
                    )}
                </Wrapper>
            )}
        </>
    );
};

export default Header;