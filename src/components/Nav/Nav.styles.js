import styled from 'styled-components';
import { Container } from '../../views/MainTemplate/MainTemplate.styles';

export const Wrapper = styled.div`
  height: 80px;
  background: ${(props) => (props.mode === 'dark' ? '#2b3945' : '#fff')};
  color: ${(props) => (props.mode === 'dark' ? '#fff' : '#111517')};
  box-shadow: ${({ theme }) => theme.shadow};

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  a {
    color: ${(props) => (props.mode === 'dark' ? '#fff' : '#111517')};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media (${({ theme }) => theme.device.s}) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;