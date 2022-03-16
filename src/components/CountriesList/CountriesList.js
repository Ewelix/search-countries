import React, { useEffect, useState } from 'react';
import CountriesListItem from "../CountriesListItem/CountriesListItem";
import { Wrapper } from "./CountriesList.styles";
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

const CountriesList = ({countries}) => {
    return (
        <Wrapper>
            <Container>
            {countries.length && (
                countries.map(country => <CountriesListItem country={country} key={country.name}/>)
            )}
            </Container>
        </Wrapper>
    );
};

export default CountriesList;