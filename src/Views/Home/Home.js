import React from "react";
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

function Home() {
    return (
        <div>
            <Sidebar/>
            <Header/>
            <Container>
                <Row className="nav-buttons">
                    <Col>
                        <button className="btn" onClick={Home}>
                            <MdPhonelinkSetup style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                            <p>Product Setup</p>
                        </button>
                    </Col>
                    <Col>
                        <button className="btn" onClick={Home}>
                            <FiSettings style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                            <p>Configurations</p>
                        </button>
                    </Col>
                    <Col>
                        <button className="btn" onClick={Home}>
                            <BsCheckCircle style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                            <p>Approvals</p>
                        </button>
                    </Col>
                    <Col>
                        <button className="btn" onClick={Home}>
                            <FiUsers style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                            <p>User Management</p>
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="rectangle">
                            <h4>Monitor</h4>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="rectangle">
                            <h4>Log Management</h4>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="rectangle">
                            <h4>Businesses Analytics</h4>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </div>
    )
}

export default Home;