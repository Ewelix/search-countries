import React from 'react';
import { useDarkModeContext } from '../../providers/darkModeProvider';
import { Container, Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const { mode } = useDarkModeContext();

  return (
    <Wrapper mode={mode}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default MainTemplate;