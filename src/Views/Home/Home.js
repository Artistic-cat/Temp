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
import {Doughnut, Line} from "react-chartjs-2";
import Table from "react-bootstrap/Table";

class Home extends Component {
    constructor(props) {
        super(props);
        new RecentlyUsed().setPath("Home", window.location.href)
        this.state = {
            /* Business Analytics Charts */
            businessChart: {
                donutData: [1, 12, 15, 10, 37, 10], // this should be the overall data
                lineData: [68, 31, 60, 40, 45, 25, 68] // this should be the overall data
            },
            logChart: {
                multiLineData: {
                    line1Data: [12, 19, 3, 5, 2, 3],
                    line2Data: [1, 2, 1, 1, 2, 2],
                },
                logLineData: [0, 10, 5, 2, 20, 30, 45]
            }
        }
    }

    render() {

        /* Business Analytics Charts Starts */
        const manageData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Business Analytics",
                backgroundColor: 'rgb(5,0,43)',
                borderColor: 'rgb(5,0,43)',
                data: this.state.businessChart.lineData,
            }]
        }
        const donutData = {
            labels: ['Red', 'Blue', 'Green', 'Cyan', 'Purple', 'Orange'],
            datasets: [
                {
                    label: 'Sales',
                    data: this.state.businessChart.donutData,
                    backgroundColor: [
                        'rgb(246,58,58)',
                        'rgb(117,197,250)',
                        'rgb(159,220,73)',
                        'rgb(77,203,175)',
                        'rgb(18,48,123)',
                        'rgb(238,127,53)',
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

        /* Business Analytics Charts Ends */

        /* Logging Charts Ends */
        const logLineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Logging Data",
                backgroundColor: 'rgb(253,100,133)',
                borderColor: 'rgb(255, 99, 132)',
                data: this.state.logChart.logLineData,
            }]
        }

        // multi line starts
        const multiLineData = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
                {
                    label: 'Product 1',
                    data: this.state.logChart.multiLineData.line1Data,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                    yAxisID: 'y-axis-1',
                },
                {
                    label: 'Product 2',
                    data: this.state.logChart.multiLineData.line2Data,
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
        /* Logging Charts Ends */

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
                                <h4>Business Analytics</h4>

                                {/* Chart Buttons Start */}
                                <button className="btn btn-outline-info" onClick={() => this.setState({
                                        businessChart: {
                                            donutData: [1, 12, 15, 10, 37, 10],
                                            lineData: [68, 31, 60, 40, 45, 25, 68]
                                        },
                                        logChart: {
                                            multiLineData: {
                                                line1Data: [12, 19, 3, 5, 2, 3],
                                                line2Data: [1, 2, 1, 1, 2, 2],
                                            },
                                            logLineData: [0, 10, 5, 2, 20, 30, 45]
                                        }
                                    }
                                )}>Overall
                                </button>
                                <button className="btn btn-outline-info" onClick={() => this.setState({
                                        businessChart: {
                                            donutData: [1, 2, 5, 1, 5, 1],
                                            lineData: [50, 10, 40, 20, 25, 15, 48]
                                        },
                                        logChart: {
                                            multiLineData: {
                                                line1Data: [9, 11, 13, 15, 12, 13],
                                                line2Data: [11, 12, 11, 11, 12, 12],
                                            },
                                            logLineData: [10, 20, 15, 12, 29, 13, 55]
                                        }
                                    }
                                )}>GiiX Managed
                                </button>
                                <button className="btn btn-outline-info" onClick={() => this.setState({
                                        businessChart: {
                                            donutData: [1, 3, 1, 2, 1, 1],
                                            lineData: [15, 11, 14, 12, 25, 5, 14]
                                        },
                                        logChart: {
                                            multiLineData: {
                                                line1Data: [1, 2, 3, 5, 2, 7],
                                                line2Data: [1, 1, 9, 11, 20, 15],
                                            },
                                            logLineData: [1, 12, 11, 25, 12, 3, 25]
                                        }
                                    }
                                )}>Insurer Managed
                                </button>
                                {/* Chart Buttons Ends */}

                                {/* Charts Start */}
                                <Row>
                                    <Col className="mt-2 mb-2">
                                        <Doughnut data={donutData}/>
                                    </Col>
                                    <Col className="mt-2 mb-2">
                                        <Line data={manageData}/>
                                    </Col>
                                </Row>
                                {/* Charts Ends */}

                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="home-rectangle">
                                <h4>Log Management</h4>
                                <Row>
                                    <Col>
                                        <Line data={logLineData}/>
                                    </Col>
                                    <Col>
                                        <Line data={multiLineData} options={multiLineOptions}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="home-log-table">
                                        <Table hover responsive striped>
                                            <thead>
                                            <tr>
                                                <th>Timestamp</th>
                                                <th>Description</th>
                                                <th>Message</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    {
                                                        new Intl.DateTimeFormat(
                                                            'en-IN',
                                                            {
                                                                year: 'numeric',
                                                                month: '2-digit',
                                                                day: '2-digit',
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                                second: '2-digit'
                                                            }
                                                        )
                                                            .format(Date.now())
                                                    }
                                                </td>
                                                <td>User Login</td>
                                                <td><p className="text-success">Alert</p></td>
                                            </tr>
                                            <tr>
                                                <td>{
                                                    new Intl.DateTimeFormat(
                                                        'en-IN',
                                                        {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            second: '2-digit'
                                                        }
                                                    )
                                                        .format(Date.now() - 1)
                                                }</td>
                                                <td>Product 1 Launched</td>
                                                <td><p className="text-success">Launch Success</p></td>
                                            </tr>
                                            <tr>
                                                <td>{
                                                    new Intl.DateTimeFormat(
                                                        'en-IN',
                                                        {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            second: '2-digit'
                                                        }
                                                    )
                                                        .format(Date.now() - 0.5)
                                                }</td>
                                                <td>Insurer Client Callback Loop Failure</td>
                                                <td><p className="text-danger">Critical</p></td>
                                            </tr>
                                            <tr>
                                                <td>{
                                                    new Intl.DateTimeFormat(
                                                        'en-IN',
                                                        {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            second: '2-digit'
                                                        }
                                                    )
                                                        .format(Date.now() - 2)
                                                }</td>
                                                <td>Response time degradation</td>
                                                <td><p className="text-warning">Warning</p></td>
                                            </tr>
                                            </tbody>
                                        </Table>
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