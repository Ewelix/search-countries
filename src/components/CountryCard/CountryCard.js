import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../../providers/darkModeProvider';
import CountryCardContent from './../CountryCardContent/CountryCardContent';
import NavButton from '../NavButton/NavButton';
import { CardWrapper, ImageWrapper } from './CountryCard.styles';
import { Content } from './CountryCard.styles';

const API_URL = 'https://restcountries.com/v2';

const CountryCard = () => {
  const { mode } = useDarkModeContext();
  const { code } = useParams();
  const [country, setCountry] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, [code]);

  if (!country) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <CardWrapper mode={mode}>
        <NavButton />
        <Content>
          <ImageWrapper>
            <img src={country.flags.svg} alt={country.name} />
          </ImageWrapper>
          <CountryCardContent data={country} />
        </Content>
      </CardWrapper>
    );
  }
};

export default CountryCard;