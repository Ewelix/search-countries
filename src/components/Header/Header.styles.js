import styled from 'styled-components';
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

export const Wrapper = styled.div`
  padding: 5% 0;

  ${Container} {
    display: flex;
    flex-wrap: wrap;

    @media (${({ theme }) => theme.device.m}) {
      justify-content: space-between;
    }
  }
`;