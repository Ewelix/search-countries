import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 20px;
  padding-bottom: 12%;

  @media (${({ theme }) => theme.device.m}) {
    max-width: 560px;
    padding-top: 0;
  }

  @media (${({ theme }) => theme.device.l}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ContentDetails = styled.div`
  padding-top: 30px;
`;