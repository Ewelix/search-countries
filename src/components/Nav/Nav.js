import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../providers/darkModeProvider';
import ColorThemeSwitcher from '../ColorThemeSwitcher/ColorThemeSwitcher';
import { Wrapper } from './Nav.styles';
import { Container } from '../../views/MainTemplate/MainTemplate.styles';

const Nav = () => {
  const { mode } = useDarkModeContext();

  return (
    <Wrapper mode={mode}>
      <Container>
        <Link to="/">Where in the world?</Link>
        <ColorThemeSwitcher />
      </Container>
    </Wrapper>
  );
};

export default Nav;