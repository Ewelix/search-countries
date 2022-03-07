import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${props => props.mode === 'dark' ? '#202c37' : '#fafafa'};
  color: ${props => props.mode === 'dark' ? '#fff' : '#111517'};
`;