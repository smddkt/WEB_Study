/*eslint-disable*/
import { Link } from 'react-router-dom';
import React from 'react';
import { StyledNavContainer, StyledNavBar, StyledHomeButton, StyledNavList } from './components/StyledNavBar';

function Nav() {
    return (
        <div>
        <StyledNavContainer>
            <StyledHomeButton>
            <li>
                <Link to='/'>UMC Movie</Link>
            </li>
            </StyledHomeButton>
            <StyledNavBar>
                <StyledNavList>
                    <Link to='/'>회원가입</Link>
                </StyledNavList>
                <StyledNavList>
                    <Link to='/displaypopular'>Popular</Link>
                </StyledNavList>
                <StyledNavList>
                    <Link to='/displaynowplaying'>Now Playing</Link>
                </StyledNavList>
                <StyledNavList>
                    <Link to='/displaytoprated'>Top Rated</Link>
                </StyledNavList>
                <StyledNavList>
                    <Link to='/displayupcoming'>Upcoming</Link>
                </StyledNavList>
            </StyledNavBar>
        </StyledNavContainer>
        </div>
    )
}

export default Nav;
