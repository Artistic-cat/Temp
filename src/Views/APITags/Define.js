import React, {Component} from "react";
import "./APITag.css";

import {Container, Table} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

/**
 * @Author: Rifas
 *
 * Insurer API Nomenclature Page
 * This page contains the wireframe for the page, has no implementations coded
 */
class Define extends Component {
    render() {

        const mockData = {
            data: [
                {
                    motherTag: "Vehicle Details",
                    childTag: ["Make"]
                },
                {
                    motherTag: "Client Details",
                    childTag: ["Salutation"]
                },
                {
                    motherTag: "Registration Details",
                    childTag: ["Engine Number"]
                },
                {
                    motherTag: "Policy Details",
                    childTag: ["Policy Start Date"]
                },
                {
                    motherTag: "Music System Fitted",
                    childTag: [
                        "Music System",
                        "Music System Make",
                        "Music System Model",
                        "Music System Price"
                    ]
                },
            ]
        }

        return (
            <>
                <Header/>
                <div className='completed-status-bar'>
                    <div className='left-name'>API Attributes</div>
                    <div className='status-icons'>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Define API Tag</div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br/>
                <Container className="container-box">
                    <h3 className="apiTag-header mb-4">Define API Tag Properties</h3>
                    <Row className="mb-4">
                        <Col>
                            <p>Insurer API Nomenclature</p>
                        </Col>
                        <Col>
                            Auto-populate
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <p>GiiX API Nomenclature</p>
                        </Col>
                        <Col>
                            Auto-populate corresponding File
                        </Col>
                    </Row>

                    <h3>Non Master driven Tags</h3>
                    <Table className="mapper-table" responsive striped hover>
                        <thead>
                        <tr>
                            <td>Sl. No</td>
                            <td>GiiX Standard Nomenclature</td>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Insurer Mother Tags</td>
                            <td>Insurer Child Tags with value</td>
                            <td>Mandatory Type</td>
                            <td>Conditional Tag</td>
                            <td>Data Type</td>
                            <td>Data Length</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            /* Add Code Here */

                            /* Mock Data Code */
                            [...mockData.data].map((key, value) => {
                                    return <>
                                        <tr key={value}>
                                            <td rowSpan={key.childTag.length}>{value + 1}</td>
                                            <td contentEditable={true} rowSpan={key.childTag.length}>{value}</td>
                                            <td contentEditable={true} rowSpan={key.childTag.length}>{value}</td>
                                            <td contentEditable={true} rowSpan={key.childTag.length}>{value}</td>
                                            <td rowSpan={key.childTag.length}>{key.motherTag}</td>
                                            <td>{key.childTag[0]}</td>
                                            <td>
                                                <select className="form-control" id={'m-nm-cm-' + value}>
                                                    <option value={'m'}>Mandatory</option>
                                                    <option value={'nm'}>Non Mandatory</option>
                                                    <option value={'cm'}>Conditional Mandatory</option>
                                                </select>
                                            </td>
                                            <td contentEditable={true}>{value}</td>
                                            <td contentEditable={true}>{value}</td>
                                            <td contentEditable={true}>{value}</td>
                                        </tr>

                                        {
                                            [...key.childTag.slice(1)].map((key1, value1) => {
                                                return <tr>
                                                    <td>{key1}</td>
                                                    <td>
                                                        <select className="form-control"
                                                                id={'m-nm-cm-' + value + '-' + value1}>
                                                            <option value={'m'}>Mandatory</option>
                                                            <option value={'nm'}>Non Mandatory</option>
                                                            <option value={'cm'}>Conditional Mandatory</option>
                                                        </select>
                                                    </td>
                                                    <td contentEditable={true}>{value1}</td>
                                                    <td contentEditable={true}>{value1}</td>
                                                    <td contentEditable={true}>{value1}</td>
                                                </tr>
                                            })
                                        }
                                    </>
                                }
                            )
                        }
                        </tbody>
                    </Table>
                    <Row className='navigation-buttons'>
                            <Col><Link to='/apitag'><button className='btn' style = {{borderRadius : "60px"}}>Cancel</button></Link></Col>
                            <Col><Link to='/'><button className='btn' style = {{borderRadius : "60px"}}>Save as Draft</button></Link></Col>
                            <Col><Link to='/'><button className='btn' style = {{borderRadius : "60px"}}>Next</button></Link></Col>
                    </Row>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default Define;