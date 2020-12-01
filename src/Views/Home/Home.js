import React from "react";
import "./Home.css";

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
                <Row>
                    <Col>
                        <MdPhonelinkSetup style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                        <p>Product Setup</p>
                    </Col>
                    <Col>
                        <FiSettings style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                        <p>Configurations</p>
                    </Col>
                    <Col>
                        <BsCheckCircle style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                        <p>Approvals</p>
                    </Col>
                    <Col>
                        <FiUsers style={{fontSize: '8vh'}} className="circle-inner-text mb-2"/>
                        <p>User Management</p>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </div>
    )
}

export default Home;