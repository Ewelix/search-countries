import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (${({ theme }) => theme.device.m}) {
  }
`;