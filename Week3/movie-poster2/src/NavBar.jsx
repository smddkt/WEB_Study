import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
    return (
        <div>
        <div className="nav-container">
            <div className = "home-button">
            <li>
                <Link to='/'>UMC Movie</Link>
            </li>
            </div>
            <nav className="navbar">
                <li className='navlist'>
                    <Link to='/'>회원가입</Link>
                </li>
                <li className='navlist'>
                    <Link to='/displaypopular'>Popular</Link>
                </li>
                <li className='navlist'>
                    <Link to='/displaynowplaying'>Now Playing</Link>
                </li>
                <li className='navlist'>
                    <Link to='/displaytoprated'>Top Rated</Link>
                </li>
                <li className='navlist'>
                    <Link to='/displayupcoming'>Upcoming</Link>
                </li>
            </nav>
        </div>
        </div>
    )
}

export default Nav;
