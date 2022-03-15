import React, {useEffect, useState} from 'react';
import CountriesListItem from "../CountriesListItem/CountriesListItem";
import { Wrapper } from "./CountriesList.styles";
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

const API_URL = 'https://restcountries.com/v2';

const CountriesList = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/all`)
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Wrapper>
            <Container>
            {countries.length ? (
                countries.map(country => <CountriesListItem country={country} key={country.name}/>)
            ) : <h2>{isLoading ? 'Loading...' : 'No countries to display.'}</h2>}
            </Container>
        </Wrapper>
    );
};

export default CountriesList;