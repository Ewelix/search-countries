import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 80px);
  background: ${props => props.mode === 'dark' ? '#202c37' : '#fafafa'};
  color: ${props => props.mode === 'dark' ? '#fff' : '#111517'};
`;

export const Container = styled.div`
  padding: 0 10px;

  @media (${({ theme }) => theme.device.s}) {
    max-width: 1280px;
    padding: 0 30px;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.device.xl}) {
    padding: 0;
  }
`