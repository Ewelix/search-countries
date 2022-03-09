import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({theme}) => theme.fontSize.xs};

  @media (${({ theme }) => theme.device.s}) {
    font-size: ${({theme}) => theme.fontSize.s};
  }
`;
