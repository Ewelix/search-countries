import React, {useEffect, useState} from 'react';
import CountriesListItem from "../CountriesListItem/CountriesListItem";
import { Wrapper } from "./CountriesList.styles";

const API_URL = 'https://restcountries.com/v2/all';

const CountriesList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setCountries(data);
            })
            .catch(err => console.log(err))

    }, []);

    console.log(countries.length)

    return (
        <Wrapper>
            {countries.length ? (
                countries.map(country => <CountriesListItem country={country} key={country.name}/>)
            ) : <h2>No countries to display.</h2>}
        </Wrapper>
    );
};

export default CountriesList;