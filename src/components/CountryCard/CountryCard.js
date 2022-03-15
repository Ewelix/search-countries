import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { CardWrapper, ImageWrapper } from './CountryCard.styles';
import {useDarkModeContext} from "../../providers/darkModeProvider";
import CountryCardContent from './../CountryCardContent/CountryCardContent';
import {Content} from './CountryCard.styles';
import NavButton from "../NavButton/NavButton";

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
                <NavButton/>
                <Content>
                    <ImageWrapper>
                        <img src={country.flags.svg} alt={country.name}/>
                    </ImageWrapper>
                    <CountryCardContent data={country}/>
                </Content>
            </CardWrapper>
        );
    }
};

export default CountryCard;