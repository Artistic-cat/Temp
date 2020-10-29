import React, {Component} from "react";
import SideNav, {Nav, NavIcon, NavItem, NavText, Toggle} from '@trendmicro/react-sidenav';
import "./Sidebar.css";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {AiFillHome, AiOutlineFundProjectionScreen} from "react-icons/ai";
import {BiAnalyse} from "react-icons/bi";

class Sidebar extends Component {
    render() {
        return (
            <SideNav>
                <Toggle/>
                <Nav defaultSelected="home">
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
                        <NavItem eventKey="monitor/new_product">
                            <NavText>
                                New Products
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="monitor/edit_existing">
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