import styled from 'styled-components';
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

export const Wrapper = styled.div`
  height: 80px;
  background: ${props => props.mode === 'dark' ? '#2b3945' : '#fff'};
  color: ${props => props.mode === 'dark' ? '#fff' : '#111517'};
  box-shadow: ${({theme}) => theme.shadow};
  
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  
  h1 {
    font-size: ${({theme}) => theme.fontSize.xs};

    @media (${({ theme }) => theme.device.s}) {
      font-size: ${({theme}) => theme.fontSize.l};
    }
  }
`;