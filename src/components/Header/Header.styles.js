import styled from 'styled-components';
import { Container } from "../../views/MainTemplate/MainTemplate.styles";

export const Wrapper = styled.div`
  padding: 5% 0;

  ${Container} {
    display: flex;
    justify-content: space-between;
  }
`;