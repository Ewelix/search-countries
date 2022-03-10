import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding-top: 10%;
  padding-left: 10px;
  
    a {
      padding: 5px 15px;
      color: inherit;
      background: ${props => props.mode === 'dark' ? '#2b3945' : '#fff'};
      box-shadow: ${({theme}) => theme.shadow};
      border-radius: 5px;
    }
`;

export const Content = styled.div`
    margin-top: 6%;

  @media (${({ theme }) => theme.device.m}) {
    display: flex;
    justify-content: space-between;
  }
    
  
  p {
    padding: 5px 0;
  }
  
  h5 {
    font-size: ${({theme}) => theme.fontSize.l};
    padding: 15px 0;
  }
  
  strong {
    font-weight: ${({theme}) => theme.fontWeight.medium};
  }
`