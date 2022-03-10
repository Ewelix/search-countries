import React from 'react';
import { Content, ContentDetails } from "./CountryCardContent.styles";
import BorderCountriesList from "../BorderCountriesList/BorderCountriesList";

const CountryCardContent = ({data: {name, population, region, subregion, capital, topLevelDomain, currencies, languages, borders}}) => {
    return (
        <Content>
            <ContentDetails>
                <h5>{name}</h5>
                <p><strong>Native Name:</strong> {name}</p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Sub region:</strong> {subregion}</p>
                {capital && <p><strong>Capital:</strong> {capital}</p>}
            </ContentDetails>
            <ContentDetails>
                <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                <p><strong>Currencies:</strong> {currencies.map((currency, i) => <span key={i}>{currency.name}</span>)}</p>
                <p><strong>Languages:</strong> {languages.map((lang, i) => <span key={i}>{lang.name}</span>)}</p>
                {borders.length > 0 && <BorderCountriesList data={borders}/>}
            </ContentDetails>
        </Content>
    );
};

export default CountryCardContent;