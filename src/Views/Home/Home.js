import React, {Component} from "react";
import "./Home.css"

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {MdPhonelinkSetup} from "react-icons/md";
import {FiSettings, FiUsers} from "react-icons/fi";
import {BsCheckCircle} from "react-icons/bs";
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed";

class Home extends Component {
    constructor(props) {
        super(props);
        new RecentlyUsed().setPath("Home", window.location.href)
    }

    render() {
        return (
            <div>
                <Header/>
                <Sidebar/>
                {/*<RecentlyUsed />*/}
                <Container>
                    <Row className="home-nav-buttons">
                        <Col>
                            <button className="btn" onClick={Home}>
                                <MdPhonelinkSetup style={{fontSize: '8vh'}} className="home-circle-inner-text mb-2"/>
                                <p>Product Setup</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="btn" onClick={Home}>
                                <FiSettings style={{fontSize: '8vh'}} className="home-circle-inner-text mb-2"/>
                                <p>Configurations</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="btn" onClick={Home}>
                                <BsCheckCircle style={{fontSize: '8vh'}} className="home-circle-inner-text mb-2"/>
                                <p>Approvals</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="btn" onClick={Home}>
                                <FiUsers style={{fontSize: '8vh'}} className="home-circle-inner-text mb-2"/>
                                <p>User Management</p>
                            </button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="home-rectangle">
                                <h4>Frequently Used</h4>
                                <Row className={'m-3'}>
                                    <Col>
                                        <button className="btn" onClick={Home}>
                                            <MdPhonelinkSetup style={{fontSize: '2vh'}} className="m-2"/>
                                            <span>Product Setup</span>
                                        </button>
                                    </Col>
                                    <Col>
                                        <button className="btn" onClick={Home}>
                                            <FiSettings style={{fontSize: '2vh'}} className="m-2"/>
                                            <span>Configurations</span>
                                        </button>
                                    </Col>
                                    <Col>
                                        <button className="btn" onClick={Home}>
                                            <BsCheckCircle style={{fontSize: '2vh'}} className="m-2"/>
                                            <span>Approvals</span>
                                        </button>
                                    </Col>
                                    <Col>
                                        <button className="btn" onClick={Home}>
                                            <FiUsers style={{fontSize: '2vh'}} className="m-2"/>
                                            <span>User Management</span>
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="home-rectangle">
                                <h4>Log Management</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="home-rectangle">
                                <h4>Business Analytics</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default Home;