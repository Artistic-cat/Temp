/* imports Start Here */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Home.css"

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from "../../Components/Sidebar/Sidebar";
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed";

import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import {MdComputer, MdPhonelinkSetup} from "react-icons/md";
import {FiSettings, FiUsers} from "react-icons/fi";
import {BsCheckCircle} from "react-icons/bs";
import {AiOutlineFundProjectionScreen, BiTrendingUp, SiLogstash, TiBusinessCard} from "react-icons/all";

import {Doughnut, Line} from "react-chartjs-2";

/* Imports End Here */

/* Home class to render the home page */
class Home extends Component {
    // Constructor -> initialize all the charts and set it to state
    constructor(props) {
        super(props);
        // Add this page to the recently used list
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
                    line2Data: [1, 2, 1, 3, 2, 3],
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
            labels: ['Car Insurance 1', 'Health Insurance 1', 'Health Insurance 2', 'Car Insurance 2', 'Travel Insurance', 'Insurance 3'],
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

        /* Logging Charts Starts */
        const logLineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Logging Data",
                backgroundColor: 'rgb(253,100,133)',
                borderColor: 'rgb(255, 99, 132)',
                data: this.state.logChart.logLineData,
            }]
        }

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
                {/* Add the header and sidebar components */}
                <Header/>
                <Sidebar/>

                {/* Home layout code container Starts */}
                <Container>
                    <Row className="home-nav-buttons">
                        <h4 className="home-nav-button-title">Product Management</h4>
                        <Col>
                            <Link to="/setup">
                                <button className="home-btn">
                                    <MdPhonelinkSetup style={{fontSize: '3.5em'}}
                                                      className="home-circle-inner-text mb-2"/>
                                    <p>New Setup</p>
                                </button>
                            </Link>
                        </Col>
                        <Col>
                            <button className="home-btn" onClick={Home}>
                                <FiSettings style={{fontSize: '3.5em'}} className="home-circle-inner-text mb-2"/>
                                <p>Change Request</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="home-btn" onClick={Home}>
                                <MdComputer style={{fontSize: '3.5em'}}
                                            className="home-circle-inner-text mb-2"/>
                                <p>Configuration</p>
                            </button>
                        </Col>
                    </Row>

                    <Row className="home-nav-buttons">
                        <h4 className="home-nav-button-title">Business Monitoring and Controls</h4>
                        <Col>
                            <button className="home-btn">
                                <TiBusinessCard style={{fontSize: '3.5em'}} className="home-circle-inner-text mb-2"/>
                                <p>Business Analytics</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="home-btn" onClick={Home}>
                                <AiOutlineFundProjectionScreen style={{fontSize: '3.5em'}}
                                                               className="home-circle-inner-text mb-2"/>
                                <p>Live Products and Partners</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="home-btn" onClick={Home}>
                                <BiTrendingUp style={{fontSize: '3.5em'}} className="home-circle-inner-text mb-2"/>
                                <p>Industry Trends</p>
                            </button>
                        </Col>
                    </Row>

                    <Row className="home-nav-buttons">
                        <h4 className="home-nav-button-title">System Administration</h4>
                        <Col>
                            <button className="home-btn">
                                <BsCheckCircle style={{fontSize: '3.5em'}} className="home-circle-inner-text mb-2"/>
                                <p>Approval Mechanism</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="home-btn" onClick={Home}>
                                <FiUsers style={{fontSize: '3.5em'}} className="home-circle-inner-text mb-2"/>
                                <p>User Management</p>
                            </button>
                        </Col>
                        <Col>
                            <button className="home-btn" onClick={Home}>
                                <SiLogstash style={{fontSize: '3.5em'}} className="home-circle-inner-text mb-2"/>
                                <p>System Log Management</p>
                            </button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="home-rectangle">
                                <h4>Business Analytics</h4>

                                {/* Chart Buttons Start */}
                                <Row className="mt-3">
                                    <Col className="home-chart-btn-area-left">
                                        <button className="home-chart-btn" onClick={() => this.setState({
                                                businessChart: {
                                                    donutData: [1, 12, 15, 10, 37, 10],
                                                    lineData: [68, 31, 60, 40, 45, 25, 68]
                                                },
                                                logChart: {
                                                    multiLineData: {
                                                        line1Data: [12, 19, 3, 5, 2, 13],
                                                        line2Data: [1, 2, 1, 3, 2, 3],
                                                    },
                                                    logLineData: [0, 10, 5, 2, 20, 30, 45]
                                                }
                                            }
                                        )}>Overall
                                        </button>
                                        <button className="home-chart-btn" onClick={() => this.setState({
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
                                        <button className="home-chart-btn" onClick={() => this.setState({
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
                                        <button className="home-chart-btn" onClick={() => this.setState({
                                                businessChart: {
                                                    donutData: [3, 5, 2, 3, 5, 1],
                                                    lineData: [25, 18, 24, 22, 5, 15, 4]
                                                },
                                                logChart: {
                                                    multiLineData: {
                                                        line1Data: [10, 20, 15, 12, 29, 55],
                                                        line2Data: [1, 12, 11, 25, 12, 25],
                                                    },
                                                    logLineData: [11, 22, 31, 25, 12, 3, 25]
                                                }
                                            }
                                        )
                                        }>API Driven
                                        </button>
                                    </Col>
                                    <Col className="home-chart-btn-area-right">
                                        <button className="home-chart-btn" onClick={() =>
                                            this.setState({
                                                    businessChart: {
                                                        donutData: [1, 2, 1, 1, 5, 1],
                                                        lineData: [50, 10, 4, 12, 25, 15, 48]
                                                    },
                                                    logChart: {
                                                        multiLineData: {
                                                            line1Data: [9, 11, 13, 15, 12, 13],
                                                            line2Data: [11, 12, 11, 11, 12, 12],
                                                        },
                                                        logLineData: [10, 20, 15, 12, 29, 13, 55]
                                                    }
                                                }
                                            )
                                        }
                                        >Today
                                        </button>
                                        <button className="home-chart-btn" onClick={() => this.setState({
                                                businessChart: {
                                                    donutData: [1, 5, 6, 2, 1, 5],
                                                    lineData: [5, 19, 11, 2, 25, 5, 14]
                                                },
                                                logChart: {
                                                    multiLineData: {
                                                        line1Data: [5, 2, 3, 5, 2, 2],
                                                        line2Data: [1, 11, 19, 11, 2, 15],
                                                    },
                                                    logLineData: [19, 2, 17, 2, 12, 30, 5]
                                                }
                                            }
                                        )}>Last Week
                                        </button>
                                        <button className="home-chart-btn" onClick={() => this.setState({
                                                businessChart: {
                                                    donutData: [3, 5, 2, 4, 5, 1],
                                                    lineData: [25, 18, 34, 22, 25, 15, 4]
                                                },
                                                logChart: {
                                                    multiLineData: {
                                                        line1Data: [10, 25, 5, 12, 29, 55],
                                                        line2Data: [15, 12, 1, 25, 12, 25],
                                                    },
                                                    logLineData: [11, 2, 31, 25, 12, 30, 5]
                                                }
                                            }
                                        )
                                        }>This Financial Year
                                        </button>
                                    </Col>
                                </Row>
                                {/* Chart Buttons Ends */}

                                {/* Charts Start */}
                                <Row>
                                    <Col className="m-4 mb-2">
                                        <Doughnut data={donutData}/>
                                    </Col>
                                    <Col className="m-4 mb-2">
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
                                        <Line className="m-4 mb-2" data={logLineData}/>
                                    </Col>
                                    <Col>
                                        <Line className="m-4 mb-2" data={multiLineData} options={multiLineOptions}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="home-log-table">

                                        {/* Log Table Starts */}
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
                                        {/* Log Table Ends */}

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* Home layout code container Ends */}

                {/* Add the footer component */}
                <Footer/>
            </div>
        )
    }
}

export default Home;