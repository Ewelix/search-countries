import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 15px 15px 15px 50px;
    margin-bottom: 30px;
    color: ${props => props.mode === 'dark' ? '#fff' : '#111517'};
    background: ${props => props.mode === 'dark' ? '#2b3945' : '#fff'};
    border: none;
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.shadow};
    
    :focus-visible {
      outline: 1px solid ${({theme}) => theme.colors.darkGray};
    }
    
    &::placeholder {
      color: ${props => props.mode === 'dark' ? '#fff' : '#C4C4C4'};
    }
  }
  svg {
    position: absolute;
    top: 15px;
    left: 15px;
    fill: ${props => props.mode === 'dark' ? '#fff' : '#C4C4C4'};
  }
`