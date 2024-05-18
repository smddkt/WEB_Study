/*eslint-disable*/
import { NavLink, Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  StyledNavContainer,
  StyledNavBar,
  StyledHomeButton,
  StyledNavList,
  StyledLoginButton,
} from './components/StyledNavBar';

function Nav() {
  const [text, setText] = useState('로그인');

  function handleClick() {
    setText((prev) => (prev === '로그인' ? '로그아웃' : '로그인'));
  }

  return (
    <div>
      <StyledNavContainer>
        <StyledHomeButton>
          <li>
            <Link to='/'>UMC Movie</Link>
          </li>
        </StyledHomeButton>
        <StyledNavBar>
          <StyledLoginButton onClick={handleClick}>{text}</StyledLoginButton>
          <StyledNavList>
            <NavLink to='/displaypopular' activeClassName='active'>
              Popular
            </NavLink>
          </StyledNavList>
          <StyledNavList>
            <NavLink to='/displaynowplaying' activeClassName='active'>
              Now Playing
            </NavLink>
          </StyledNavList>
          <StyledNavList>
            <NavLink to='/displaytoprated' activeClassName='active'>
              Top Rated
            </NavLink>
          </StyledNavList>
          <StyledNavList>
            <NavLink to='/displayupcoming' activeClassName='active'>
              Upcoming
            </NavLink>
          </StyledNavList>
        </StyledNavBar>
      </StyledNavContainer>
    </div>
  );
}

export default Nav;
