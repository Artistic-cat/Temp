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
        return (
            <>
                <Header/>
                <Container className="container-box">
                    <h3 className="apiTag-header">Define API Tag Properties</h3>
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