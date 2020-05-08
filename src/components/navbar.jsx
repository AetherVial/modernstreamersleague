import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to='/' activeClassName=""> <img src={require("../assets/header_logo.webp")} alt=""/></NavLink>

            <ul>
                <NavLink className='link' activeClassName="active" exact to='/'>Home</NavLink>
                <NavLink className='link' activeClassName="active" exact to='/bracket'>Bracket</NavLink>
                <NavLink className='link' activeClassName="active" exact to='/decklists'>Decklists</NavLink>
                <NavLink className='link' activeClassName="active" exact to='/vods'>VODS</NavLink>
                <NavLink className='link' activeClassName="active" exact to='/about'>About</NavLink>
                <NavLink className='link' activeClassName="active" exact to='/contact'>Contact Us</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;
