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
import {BiAnalyse, SiLivejournal, SiLogstash} from "react-icons/all";
import {Line} from "react-chartjs-2";

class Home extends Component {
    constructor(props) {
        super(props);
        new RecentlyUsed().setPath("Home", window.location.href)
    }

    render() {
        const logData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Logging Data",
                backgroundColor: 'rgb(253,100,133)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        }

        const manageData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Business Analytics",
                backgroundColor: 'rgb(5,0,43)',
                borderColor: 'rgb(5,0,43)',
                data: [10, 0, 50, 2, 20, 15, 5],
            }]
        }

        return (
            <div>
                <Header/>
                <Sidebar/>
                <Container>
                    <Row className="home-nav-buttons">
                        <Col>
                            <button className="btn">
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
                                <h4>Setup</h4>
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

                                <h4>Monitor</h4>
                                <Row className={'m-3'}>
                                    <Col>
                                        <button className="btn" onClick={Home}>
                                            <SiLivejournal style={{fontSize: '2vh'}} className="m-2"/>
                                            <span>Manage Live Products</span>
                                        </button>
                                    </Col>
                                    <Col>
                                        <button className="btn" onClick={Home}>
                                            <SiLogstash style={{fontSize: '2vh'}} className="m-2"/>
                                            <span>Log Management</span>
                                        </button>
                                    </Col>
                                    <Col>
                                        <button className="btn" onClick={Home}>
                                            <BiAnalyse style={{fontSize: '2vh'}} className="m-2"/>
                                            <span>Business Analytic</span>
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
                                <Line
                                    data={logData}
                                    height={100}
                                    width={200}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="home-rectangle">
                                <h4>Business Analytics</h4>
                                <Line
                                    data={manageData}
                                    height={50}
                                    width={100}
                                />
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