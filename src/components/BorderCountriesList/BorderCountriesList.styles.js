import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 30px;

  @media (${({ theme }) => theme.device.m}) {
    flex-basis: 100%;
  }
  
  strong {
    flex-basis: 100%;
  };
`

export const StyledLink = styled(Link)`
  min-width: 80px;
  font-size: ${({theme}) => theme.fontSize.xxs};
  text-align: center;
`