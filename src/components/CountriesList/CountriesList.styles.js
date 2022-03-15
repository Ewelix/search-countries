import styled from 'styled-components';
import {Container} from "../../views/MainTemplate/MainTemplate.styles";

export const Wrapper = styled.div`
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    min-height: 100vh;

    @media (${({ theme }) => theme.device.l}) {
      justify-content: space-between;
    }
  }
`;