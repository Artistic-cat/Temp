import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table,ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios"
import {Container} from 'react-bootstrap'

import './GiiXMapping.css'

/*
 * @Author: Sristi
 *
 * Status Page 2- GiiX Mapping page.
 * 
 * This view is just the wireframe and not the implementation, the API used is just for eference and not the actual API.
 * 
 * Add onClicks to the ML and Concantenation toggle buttons
 * 
 */

class AutomaticMapping extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/insurerMasterSetupStatus?insurerProductTransactionTypeId=156")
                .then((response) => {
                    this.setState({
                            giixStatusList: response.data.apiResponse.data
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
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Automatic Mapping</div>
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
                        
                        <div className='mapping-options'>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="flat" size="xxl" value={1}>Machine Learning</ToggleButton>
                                <ToggleButton variant="flat" size="xxl" value={2}>Concantenation</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <br/>
                        <br/>
                            <Col>
                                <Row>
                                    <div className='insurer-table'>
                                        <Table bordered>
                                            <thead style={{display: 'table-header-group', backgroundColor: "#000A28", color : "#fff"}}>
                                                <tr>
                                                    <th>Insurer Master Name</th>
                                                    <th>GiiX Master Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>abc</td>
                                                    <td>Make Model Master</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <Table bordered>
                                            <thead style={{display: 'table-header-group', backgroundColor : "#000A28", color : "#fff"}}>
                                                <tr>
                                                    <th>Sr. No.</th>
                                                    <th>Insurer Column Names</th>
                                                    <th>GiiX Column Names</th>
                                                    <th>Sr. No.</th>
                                                    <th>Verified</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                (this.state != null ?
                                                    [...this.state.giixStatusList].map((data) =>
                                                        <tr key={data.insurerFileManager}>
                                                            <td></td>
                                                            <td>{data.insurerMasterName}</td>
                                                            <td>{data.giixMasterName}</td>
                                                            <td></td>
                                                            <td><input type='checkbox'/></td>
                                                        </tr>
                                                    )
                                                    : "")
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Row>
                            </Col>
                        <br/>
                        <br/>
                        <Row className='navigation-buttons'>
                            <Col><Link to='/status/giixmapping'><button className='btn '>Back</button></Link></Col>
                            <Col><Link to='/status/giixmapping'><button className='btn '>Save Mapping</button></Link></Col>
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

export default AutomaticMapping