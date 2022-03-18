import React from 'react';
import CountriesListItem from "../CountriesListItem/CountriesListItem";
import { CountriesListWrapper } from "./CountriesList.styles";
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

const CountriesList = ({ countries }) => {
    return (
        <CountriesListWrapper>
            <Container>
            {countries.length > 0 ? (
                countries.map(country => <CountriesListItem country={country} key={country.name}/>)
            ): <h2>No results match your search criteria. Please change filtering.</h2>}
            </Container>
        </CountriesListWrapper>
    );
};

export default CountriesList;