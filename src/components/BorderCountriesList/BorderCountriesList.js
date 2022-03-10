import React from 'react';
import { Wrapper, StyledLink } from './BorderCountriesList.styles';

const BorderCountriesList = ({data}) => {
    return (
        <Wrapper>
            <strong>Border Countries: </strong>
            {data.map((border, i) => (
                <StyledLink to={`/country/${border}`} key={i}>{border}</StyledLink>
            ))}
        </Wrapper>
    );
};

export default BorderCountriesList;