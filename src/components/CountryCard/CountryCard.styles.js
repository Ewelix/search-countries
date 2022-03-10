import styled from 'styled-components';

export const CardWrapper = styled.div`
    a {
      padding: 5px 15px;
      color: ${props => props.mode === 'dark' ? '#fff' : '#111517'};
      background: ${props => props.mode === 'dark' ? '#2b3945' : '#fff'};
      box-shadow: ${({theme}) => theme.shadow};
      border-radius: 5px;
    }
`