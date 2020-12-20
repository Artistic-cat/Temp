import React, { Component } from "react";
import "./Preview.css";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";


/**
 * @Author: Vidhi
 *
 * Master Dependency Nomenclature Preview Master Dependencies Page
 * This page contains the wireframe for the page, has no implementations coded
 *
 * Calls the GET /
 */


class Preview extends Component {
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/")
                .then((response) => {
                    this.setState({
                            Previewmap: response.data.apiResponse.data
                        }
                    )
                })
        } catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({error});
        }
    }
    render() {
        return(
            <div>
                <Header/>
                <div className='completed-status-bar'>
                    <div className='left-name'>Master Dependency</div>
                    <div className='status-icons'>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Preview Master Dependency</div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br/>
                <Container className = "container-box">
                <div>
                        <div className='previewdependency-table'>
                            <Table responsive striped bordered hover style ={{marginTop:"5%"}}>
                                <thead>
                                    <tr className = "headings">
                                        {/* <th>Sr. No.</th> */}
                                        <th>Giix Master Name</th>
                                        <th>Column Name</th>
                                        <th>Giix Standard Tag Name</th>
                                        <th>Insurer Mother Tags</th>
                                        <th>Insurer Child Tags</th>
                                        <th>Column Name(Insurer)</th>
                                        <th>Simple Name</th>
                                        <th>Description</th>
                                        <th>Insurer Master Name</th>
                                        <th>Simple Name</th>
                                        <th>Description</th>
                                        <th>Undo Mapping</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*// TODO: Set the appropriate Data in the table which is related to preview master dependencies data related to preview master dependencies of xml/json tags of master dependency file field */}
                                    {/* {
                                        (this.state != null ?
                                            [...this.state.MapStatus].map((data) =>
                                                <tr key={data.id}>
                                                    <td>{data.insurerColumnName}</td>
                                                    <td>{data.giixMasterColumnRepoId}</td>
                                                    <td>{data.freetext}</td>
                                                    <td>{data.insurerColumnDescription}</td>
                                                    <td>Undo Mapping</td>
                                                </tr>
                                            )
                                            : "")
                                    } */}
                                </tbody>
                            </Table>
                        </div>
                        <br/>
                        <br/>
                        <Row className='navigation-buttons'>
                            <Col><Link to='/Xmltags'><button className='btn' style = {{borderRadius : "60px"}}>Back</button></Link></Col>
                        </Row>
                    </div>

                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Preview;