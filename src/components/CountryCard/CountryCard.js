import React, {useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import {Content, ContentDetails, ImageWrapper} from "../CountriesListItem/CountriesListItem.styles";
import { CardWrapper } from './CountryCard.styles';
import BorderCountriesList from "../BorderCountriesList/BorderCountriesList";
import {useDarkModeContext} from "../../providers/darkModeProvider";
import CountryCardContent from './../CountryCardContent/CountryCardContent';

const API_URL = 'https://restcountries.com/v2';

const CountryCard = () => {
    const { mode } = useDarkModeContext();
    const { code } = useParams();
    const [country, setCountry] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/alpha/${code}`)
            .then(res => res.json())
            .then(data => setCountry(data))
            .catch(err => console.log(err))
    }, [])

    if (country === false) {
        return <h1>Loading...</h1>
    } else {
        return (
            <CardWrapper mode={mode}>
                <Link to="/">Button</Link>
                <ImageWrapper>
                    <img src={country.flags.svg} alt={country.name}/>
                </ImageWrapper>
                <CountryCardContent data={country}/>
            </CardWrapper>
        );
    }
};

export default CountryCard;