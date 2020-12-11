import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'
import axios from "axios"

/*
 * @Author: Sristi
 *
 * Define API Sequence Page 3i- Entity Mapping of API.
 * 
 * This is just the wireframe but since it's similar to GiiXMapping.js, that API is used. Need to change it.
 * Change API to what's required.
 * 
 */

class GiiXMapping extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/giixmastersample?masterRepoId=1")
                .then((response) => {
                    this.setState({
                            giixMasterColumnList: response.data.apiResponse.data
                        }
                    )
                })
            await axios.get(global.config.backend_ip
                + "/insurerMasterColumns?insurerMasterRepoId=5")
                .then((response) => {
                    this.setState({
                            insurerMasterColumnList: response.data.apiResponse.data
                        }
                    )
                })
        } catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({error});
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <Container className="container-box">
                    <div>
                        <style type="text/css">
                            {`
                            .btn-flat {
                                background-color: #000A28 !important;
                                color: white !important;
                                outline: 0 !important;
                                border: 0 !important;
                                border-radius: 4px !important;
                                font-weight: normal !important;
                            }

                            .btn-xxl.active{
                                background-color: #0D7DBC !important;
                                color: white !important;
                                outline: 0 !important;
                                border: 0 !important;
                            }

                            .btn-xxl:hover{
                                background-color: #06517B !important;
                                color: white !important;
                                outline: 0 !important;
                                border: 0 !important;
                            }

                            .btn-xxl {
                            padding: 1em 1.5em !important;
                            font-size: 1em !important;
                            width: 15em !important;
                            height: 3.5em !important;
                            }

                            `}
                        </style>
                        <div className='mapping-options'>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="flat" size="xxl" value={1}>Manually Map</ToggleButton>
                                <ToggleButton variant="flat" size="xxl" value={2}><Link to='/statusofapisetup/mapping/automatic'>Automatic Mapping</Link></ToggleButton>
                            </ToggleButtonGroup>
                            <Link to='/statusofapisetup/mapping/preview' className='mapping-option'>Preview Mapped Entries</Link>
                        </div>
                        <Row>
                            <Col>
                                <div className='insurer-table'>
                                    <h5>Insurer API Tags</h5>
                                    <Table>
                                        <thread>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Insurer Tag Name</th>
                                                <th>Radio Button</th>
                                            </tr>
                                        </thread>
                                        <tbody>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.insurerMasterColumnList].map((data) =>
                                                        <tr key={data.insurerFileManager}>
                                                            <td>{data.giixMasterName}</td>
                                                            <td>{data.insurerMasterName}</td> 
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h5>GiiX Standard API Tags</h5>
                                    <Table>
                                        <thread>
                                            <tr>
                                                <th>Radio Button</th>
                                                <th>GiiX Tag Name</th>
                                                <th>Sr. No.</th>
                                            </tr>
                                        </thread>
                                        <tbody>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.giixMasterColumnList].map((data) =>
                                                        <tr key={data.insurerFileManager}>
                                                            <td>{data.giixMasterName}</td>
                                                            <td>{data.insurerMasterName}</td> 
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <div className='insurer-table'>
                                    <h5>Insurer API File Preview</h5>
                                    <Table>
                                        <thread>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.insurerMasterColumnList].map((data) =>
                                                        <tr key={data.insurerFileManager}>
                                                            <td>{data.giixMasterName}</td>
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
                                        </thread>
                                        <tbody>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.insurerMasterColumnList].map((data) =>
                                                        <tr key={data.insurerFileManager}>
                                                            <td>{data.giixMasterName}</td>
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h5>GiiX API File Preview</h5>
                                    <Table>
                                    <thread>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.insurerMasterColumnList].map((data) =>
                                                        <tr key={data.insurerFileManager}>
                                                            <td>{data.giixMasterName}</td>
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
                                        </thread>
                                        <tbody>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.insurerMasterColumnList].map((data) =>
                                                        <tr key={data.insurerFileManager}>
                                                            <td>{data.giixMasterName}</td>
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row className='navigation-buttons'>
                            <Col><Link to='/statusofapisetup'><button className='btn '>Cancel</button></Link></Col>
                            <Col><Link><button className='btn '>Save Draft</button></Link></Col>
                            <Col><Link><button className='btn '>Map</button></Link></Col>
                        </Row>
                        <br/>
                        <br/>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default GiiXMapping