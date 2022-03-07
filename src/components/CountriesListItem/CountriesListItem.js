import React from 'react';
import { Wrapper, ImageWrapper, Content, ContentDetails } from "./CountriesListItem.styles";
import { useDarkModeContext } from "../../providers/darkModeProvider";

const CountriesListItem = ({country: {flags, name, population, region, capital}}) => {
    const { mode } = useDarkModeContext();

    return (
        <Wrapper mode={mode}>
            <ImageWrapper>
                <img src={flags.svg} alt={name}/>
            </ImageWrapper>
            <Content>
                <h5>{name}</h5>
                <ContentDetails>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    {capital && <p><strong>Capital:</strong> {capital}</p>}
                </ContentDetails>
            </Content>
        </Wrapper>
    );
};

export default CountriesListItem;