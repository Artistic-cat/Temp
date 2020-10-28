import React from 'react';
import '../Header/Header.css';
// import '../../Images/search.svg';

function Header(){
    return(
        <div className='header'>
            <div className='burger-menu'>MENU</div>
            <div className='logo'>LOGO</div>
            <div className='search-bar'>
                <input className='search-bar-input' type='text'/> 
                <div className='search-icon'></div>
            </div>
            <div className='profile-icon'>PROFILE</div>
        </div>
    );
}

export default Header;