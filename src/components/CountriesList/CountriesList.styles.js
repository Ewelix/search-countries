import styled from 'styled-components';
import { Container } from '../../views/MainTemplate/MainTemplate.styles';

export const CountriesListWrapper = styled.div`
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    gap: 20px;
    min-height: 100vh;

    @media (${({ theme }) => theme.device.xl}) {
      justify-content: space-between;
    }
  }
`;