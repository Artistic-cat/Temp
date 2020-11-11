import React from 'react';
import '../Header/Header.css';

import '../../Images/search.svg';

class Header extends React.Component {
    render() {
        return (
            React.createElement("div", {className: "header"},
                React.createElement("div", {className: "logo"}, "Logo"),
                React.createElement("div", {className: "search-bar"},
                    React.createElement("input", {className: "search-bar-input", type: "text"}),
                    React.createElement("div", {className: "search-icon"})
                ),
            )
        )
    }
}

export default Header;