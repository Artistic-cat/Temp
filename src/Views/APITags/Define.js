import React, {Component} from "react";
import "./APITag.css";

import {Container, Table} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

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
                            <td>(M/NM/CM))</td>
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
                                            <td contentEditable={true}>{value}</td>
                                            <td contentEditable={true}>{value}</td>
                                            <td contentEditable={true}>{value}</td>
                                            <td contentEditable={true}>{value}</td>
                                        </tr>

                                        {
                                            [...key.childTag.slice(1)].map((key1, value1) => {
                                                return <tr>
                                                    <td>{key1}</td>
                                                    <td contentEditable={true}>{value1}</td>
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
                    <button className={"btn"}>Save as Draft</button>
                    <button className={"btn"}>Next</button>
                    <button className={"btn"}>Cancel</button>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default Define;