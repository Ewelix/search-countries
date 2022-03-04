import React from 'react';
import { Wrapper, Content, ContentDetails } from "./CountriesListItem.styles";

const CountriesListItem = ({country: {flags, name, population, region, capital}}) => {
    return (
        <Wrapper>
            <img src={flags.svg} alt={name}/>
            <Content>
                <h5>{name}</h5>
                <ContentDetails>
                    <p>{population}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </ContentDetails>
            </Content>
        </Wrapper>
    );
};

export default CountriesListItem;