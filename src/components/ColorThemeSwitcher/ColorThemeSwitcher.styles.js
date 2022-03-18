import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background: inherit;
  color: inherit;
  border: none;
  cursor: pointer;

  @media (${({ theme }) => theme.device.s}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
