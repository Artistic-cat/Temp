import React from 'react';
import "./Sidebar.css"

const sideLinks = [
    {url: "/home", name: "Home"},
    {url: "/apiDriven", name: "API Driven"},
    {url: "/monitor", name: "Monitor"},
    {url: "/transaction", name: "New Transaction Setup"},
    {url: "/giix", name: "GiiX Managed Setup"},
    {url: "/insurer", name: "Insurer Managed Setup"},
]

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: "menu active",
            menuStatus: "close",
            buttonStyle: "ham-container change"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        switch (this.state.menuStatus) {
            case "close":
                this.setState({
                    menuStatus: "open",
                    style: "menu",
                    buttonStyle: "ham-container"
                });
                break;
            default:
                this.setState({
                    menuStatus: "close",
                    style: "menu active",
                    buttonStyle: "ham-container change"
                });
                break;
        }
    }

    render() {
        return (
            React.createElement("div", null,
                React.createElement("button", {onClick: this.handleClick, className: this.state.buttonStyle},
                    React.createElement("div", {className: "bar1"}),
                    React.createElement("div", {className: "bar2"}),
                    React.createElement("div", {className: "bar3"}),
                ),
                React.createElement("div", {className: this.state.style},
                    React.createElement("ul", null,
                        sideLinks.map(({url, name}) =>
                            React.createElement("li", {key: "li-" + name},
                                React.createElement("a", {href: url, key: "a-" + name}, name)
                            )
                        )
                    )
                )
            )
        );
    }
}

export default Sidebar;