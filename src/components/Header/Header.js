import React, { useEffect, useState } from 'react';
import { useDarkModeContext } from "../../providers/darkModeProvider";
import CountriesList from "../CountriesList/CountriesList";
import Filter from "../Filter/Filter";
import SearchBar from "../Search/SearchBar";
import { Wrapper } from "./Header.styles";
import { Container } from "../../views/MainTemplate/MainTemplate.styles";
import { BASE_URL } from "../../api";
import Loader from "../Loader/Loader";

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

    const getCountriesByRegion = async (region) => {
        if (!region) return;

        if(region === 'all') {
            try {
                await getAllCountries()
            } catch (err) {
                console.log('error', err)
            }
            return;
        }

        const res = await fetch(`${BASE_URL}/region/${region}`);
        const data = await res.json();
        setCountries(data);
    };

    return (
        <>
            {isLoading ? (
                <Loader error={error}/>
            ) : (
                <Wrapper mode={mode}>
                    <Container>
                        <SearchBar
                            searchCountries={searchCountries}
                            searchPhrase={searchPhrase}
                        />
                        <Filter
                            setCountries={setCountries}
                            getCountriesByRegion={getCountriesByRegion}
                        />
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