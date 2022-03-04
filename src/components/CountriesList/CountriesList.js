import React, {useEffect, useState} from 'react';
import CountriesListItem from "../CountriesListItem/CountriesListItem";
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
        <div>
            {countries.length ? (
                countries.map(country => <CountriesListItem country={country} key={country.name}/>)
            ) : <h2>No countries to display.</h2>}
        </div>
    );
};

export default CountriesList;