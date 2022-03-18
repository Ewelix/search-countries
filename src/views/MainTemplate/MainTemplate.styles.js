import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => (props.mode === 'dark' ? '#202c37' : '#fafafa')};
  color: ${(props) => (props.mode === 'dark' ? '#fff' : '#111517')};

  @media (${({ theme }) => theme.device.m}) {
    min-height: calc(100vh - 80px);
  }
`;

export const Container = styled.div`
  padding: 0 10px;

  @media (${({ theme }) => theme.device.s}) {
    max-width: 1280px;
    padding: 0 30px;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.device.xl}) {
    padding: 10px;
  }
`;