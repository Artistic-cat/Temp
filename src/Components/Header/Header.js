import React from 'react';
import '../Header/Header.css';
import '../../Images/search.svg';
import Sidebar from "../Sidebar/Sidebar";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.sidebar = new Sidebar(props);
    }

    render() {
        return (
            React.createElement("div", {className: "header"},
                React.createElement("div", {className: "logo"}, "Logo"),
                React.createElement("div", {className: "search-bar"},
                    React.createElement("input", {className: "search-bar-input", type: "text"}),
                    React.createElement("div", {className: "search-icon"})
                ),
                React.createElement("div", {className: "profile"}, "Profile"),
            )
        )
    }
}

export default Header;