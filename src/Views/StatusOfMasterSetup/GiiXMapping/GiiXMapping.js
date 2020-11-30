import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table,ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'

import './GiiXMapping.css'


class GiiXMapping extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Container className="container-box">
                    <div>
                        <style type="text/css">
                            {`
                            .btn-flat {
                                background-color: #000A28;
                                color: white;
                                outline: 0;
                                border: 0;
                            }

                            .btn-xxl.active{
                                background-color: #0D7DBC;
                                color: white;
                                outline: 0;
                                border: 0;
                            }

                            .btn-xxl:hover{
                                background-color: #06517B;
                                color: white;
                                outline: 0;
                                border: 0;
                            }

                            .btn-xxl {
                            padding: 1em 1.5em;
                            font-size: 1em;
                            width: 15em;
                            }

                            `}
                        </style>
                        <div className='mapping-options'>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="flat" size="xxl" value={1}>Manually Map</ToggleButton>
                                <ToggleButton variant="flat" size="xxl" value={2}>Automatic Mapping</ToggleButton>
                            </ToggleButtonGroup>
                            <Link to='/setup/giixmapping/preview' className='mapping-option'>Preview Mapped Entries</Link>
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
                                            <tr>
                                                <td></td>
                                            </tr>
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
                                            <tr>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row className='navigation-buttons'>
                            <Col><Link to='/testing'><button className='btn '></button>Cancel</Link></Col>
                            <Col><Link><button className='btn '></button>Save Draft</Link></Col>
                            <Col><Link><button className='btn '></button>Map</Link></Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default GiiXMapping