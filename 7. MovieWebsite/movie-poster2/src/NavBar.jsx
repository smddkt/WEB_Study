/*eslint-disable*/
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import {
  StyledNavContainer,
  StyledNavBar,
  StyledHomeButton,
  StyledNavList,
  StyledRegisterButton,
} from './components/StyledNavBar'; // Ensure this path is correct

const NavBar = () => {
  return (
    <StyledNavContainer>
      <StyledHomeButton>
        <li>
          <Link to='/'>UMC Movie</Link>
        </li>
      </StyledHomeButton>
      <StyledNavBar>
        <StyledRegisterButton>
          <NavLink to='/registrationpage'>회원가입</NavLink>
        </StyledRegisterButton>
        <StyledNavList>
          <NavLink to='/displaypopular'>Popular</NavLink>
        </StyledNavList>
        <StyledNavList>
          <NavLink to='/displaynowplaying'>Now Playing</NavLink>
        </StyledNavList>
        <StyledNavList>
          <NavLink to='/displaytoprated'>Top Rated</NavLink>
        </StyledNavList>
        <StyledNavList>
          <NavLink to='/displayupcoming'>Upcoming</NavLink>
        </StyledNavList>
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
