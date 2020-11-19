import React, {Component} from "react";
import SideNav, {Nav, NavIcon, NavItem, NavText, Toggle} from '@trendmicro/react-sidenav';
import "./Sidebar.css";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {AiFillHome, AiOutlineFundProjectionScreen, AiOutlineUser} from "react-icons/ai";
import {BiAnalyse} from "react-icons/bi";
import RecentlyUsed from "../RecentlyUsed/RecentlyUsed";
import {FaSignOutAlt, FiSettings, FiUser, MdRecentActors, TiArrowBackOutline} from "react-icons/all";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        };
    }

    render() {
        return (
            <SideNav
                expanded={this.state.expanded}
                onToggle={(expanded) => {
                    this.setState({expanded});
                }}
                onSelect={(selected) => {
                    // Add your code here
                    const to = '/' + selected;
                    if (!(window.location.pathname === to)) {
                        window.location = to;
                    }
                }}
            >
                <Toggle/>
                <Nav defaultSelected="user">
                    <NavItem eventKey="recent">
                        <NavIcon>
                            <MdRecentActors style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Recently Used
                        </NavText>
                        {
                            [...new RecentlyUsed().state.pages].map((entry) => {
                                let title = entry[0]
                                let path = entry[1]
                                return <NavItem eventKey={path}><NavText
                                    style={{fontSize: '1.2em', paddingLeft: '15%'}}><a
                                    style={{color: '#fff', textDecoration: 'none'}}
                                    href={path}>{title}</a></NavText></NavItem>
                            })
                        }
                    </NavItem>
                    <NavItem eventKey="user">
                        <NavIcon>
                            <AiOutlineUser style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            User Name Comes Here
                        </NavText>
                        <NavItem eventKey="user/profile" >
                            <NavIcon>
                                <FiUser style={{fontSize: '1em', marginRight: '1em'}}/>
                                Profile
                            </NavIcon>
                        </NavItem>
                        <NavItem eventKey="user/settings">
                            <NavIcon>
                                <FiSettings style={{fontSize: '1em', marginRight: '1em'}}/>
                                Settings
                            </NavIcon>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <TiArrowBackOutline style={{fontSize: '1em', marginRight: '1em'}}/>
                                About Us
                            </NavIcon>
                        </NavItem>
                        <NavItem eventKey="user/sign_out">
                            <NavIcon>
                                <FaSignOutAlt style={{fontSize: '1em', marginRight: '1em'}}/>
                                Sign Out
                            </NavIcon>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <AiFillHome style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Monitor">
                        <NavIcon>
                            <AiOutlineFundProjectionScreen style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Monitor
                        </NavText>
                        <NavItem eventKey="monitor/live_product">
                            <NavText>
                                Live Products
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="monitor/log_management">
                            <NavText>
                                Log Management
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="Insurer">
                        <NavIcon>
                            <BiAnalyse style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Insurer
                        </NavText>
                        <NavItem eventKey="insurer/new_product">
                            <NavText>
                                New Products
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="insurer/edit_existing">
                            <NavText>
                                Edit Existing
                            </NavText>
                        </NavItem>
                    </NavItem>
                </Nav>
            </SideNav>
        );
    }
}

export default Sidebar;