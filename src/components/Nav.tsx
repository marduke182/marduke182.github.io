import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const NavStyled: any = styled.nav`
  display: flex;
  flex-direction: row;

  & > a {
    padding-left: 1rem;
  }
`;

export const Nav: React.FunctionComponent = () => (
  <NavStyled>
    <Link to="/about-me">About Me</Link>
    <Link to="/blog">Blog</Link>
  </NavStyled>
);
