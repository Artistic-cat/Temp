import React from 'react';
import {Link} from 'react-router-dom';
import '../Header/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Link to='/home'>
                    <div className='logo'>
                        Logo
                    </div>
                </Link>
            </div>
        )
    }
}

export default Header;