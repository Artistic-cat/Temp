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
import {Doughnut, Line, Scatter} from "react-chartjs-2";

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

        // line chart starts

        const lineData = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
                {
                    label: 'Crash Logs',
                    data: [12, 19, 3, 5, 2, 3],
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                },
            ],
        }

        const lineOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        }

        // Line chart ends

        // multi line starts
        const multiLineData = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
                {
                    label: 'Product 1',
                    data: [12, 19, 3, 5, 2, 3],
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                    yAxisID: 'y-axis-1',
                },
                {
                    label: 'Product 2',
                    data: [1, 2, 1, 1, 2, 2],
                    fill: false,
                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgba(54, 162, 235, 0.2)',
                    yAxisID: 'y-axis-2',
                },
            ],
        }

        const multiLineOptions = {
            scales: {
                yAxes: [
                    {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    },
                    {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            drawOnArea: false,
                        },
                    },
                ],
            },
        }
        // multi line ends

        // scatter
        const rand = () => Math.round(Math.random() * 20 - 10)

        const scatterData = {
            datasets: [
                {
                    label: 'Product Hits',
                    data: [
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                        {x: rand(), y: rand()},
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                },
            ],
        }

        const scatterOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        }
        // scatter ends

        //donut
        const donutData = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: 'Sales',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
        // donut ends

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
                                <Row>
                                    <Col>
                                        <Line data={logData}/>
                                    </Col>
                                    <Col>
                                        <Line data={lineData} options={lineOptions}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Line data={multiLineData} options={multiLineOptions}/>
                                    </Col>
                                    <Col>
                                        <Scatter data={scatterData} options={scatterOptions}/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="home-rectangle">
                                <h4>Business Analytics</h4>
                                <Row>
                                    <Col>
                                        <Doughnut data={donutData}/>
                                    </Col>
                                    <Col>
                                        <Line data={manageData}/>
                                    </Col>
                                </Row>

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