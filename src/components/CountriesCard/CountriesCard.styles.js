import styled from 'styled-components';
import { Container } from '../../views/MainTemplate/MainTemplate.styles';

export const Wrapper = styled.div`
  padding: 5% 0;

  ${Container} {
    display: flex;
    flex-wrap: wrap;
  }

  & > ${Container} {
    flex-direction: column;
    margin-bottom: 40px;

    @media (${({ theme }) => theme.device.s}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;