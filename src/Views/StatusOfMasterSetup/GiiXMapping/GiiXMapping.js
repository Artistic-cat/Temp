import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'
import axios from "axios"

import './GiiXMapping.css'


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
                <div className='completed-status-bar'>
                    <div className='left-name'>Set Up Master</div>
                    <div className='status-icons'>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>GiiX Mapping</div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br/>
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
                        <br/>
                        <br/>
                        <div className='mapping-options'>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="flat" size="xxl" value={1}>Manually Map</ToggleButton>
                                <ToggleButton variant="flat" size="xxl" value={2}><Link to='/status/giixmapping/automaticmapping'>Automatic Mapping</Link></ToggleButton>
                            </ToggleButtonGroup>
                            <Link to='/status/giixmapping/preview' className='mapping-option'>Preview Mapped Entries</Link>
                        </div>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <div className='insurer-table'>
                                    <h5>Insurer Master Column Names</h5>
                                    <Table>
                                        <thread>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Column Name</th>
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
                                    <h5>GiiX Master Column Names</h5>
                                    <Table>
                                        <thread>
                                            <tr>
                                                <th>Radio Button</th>
                                                <th>Column Name</th>
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
                        <Row className='navigation-buttons'>
                            <Col><Link to='/status'><button className='btn '>Cancel</button></Link></Col>
                            <Col><Link><button className='btn '>Save Draft</button></Link></Col>
                            <Col><Link><button className='btn '>Map</button></Link></Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default GiiXMapping