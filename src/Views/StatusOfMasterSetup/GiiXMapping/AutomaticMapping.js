import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table,ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'

import './GiiXMapping.css'


class AutomaticMapping extends Component{
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
                                <ToggleButton variant="flat" size="xxl" value={1}>Machine Learning</ToggleButton>
                                <ToggleButton variant="flat" size="xxl" value={2}>Elastic</ToggleButton>
                                <ToggleButton variant="flat" size="xxl" value={3}>Concantenation</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <br/>
                        <br/>
                            <Col>
                                <Row>
                                    <div className='insurer-table'>
                                        <Table>
                                            <thread>
                                                <tr>
                                                    <th>Insurer Master Name</th>
                                                    <th>GiiX Master Name</th>
                                                </tr>
                                            </thread>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <Table>
                                            <thread>
                                                <tr>
                                                    <th>Sr. No.</th>
                                                    <th>Insurer Column Names</th>
                                                    <th>GiiX Column Names</th>
                                                    <th>Sr. No.</th>
                                                    <th>Verified</th>
                                                </tr>
                                            </thread>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Row>
                            </Col>
                        <br/>
                        <br/>
                        <Row className='navigation-buttons'>
                            <Col><Link to='/status/giixmapping'><button className='btn '>Save Mapping</button></Link></Col>
                            <Col><Link to='/status/giixmapping'><button className='btn '>Back</button></Link></Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default AutomaticMapping