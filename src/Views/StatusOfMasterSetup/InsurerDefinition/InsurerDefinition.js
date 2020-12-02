import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'

class InsurerDefinition extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Container className="container-box">
                    <div>
                        <br/>
                        <br/>
                        <Col>
                            <Row>
                                <div className='insurer-table'>
                                    <Table>
                                        <thread>
                                            <tr>
                                                <th>Insurer Master File</th>
                                                <th>Name</th>
                                                <th>Description</th>
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
                                                <th>Column Name</th>
                                                <th>Name</th>
                                                <th>Description</th>
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
                            <Col><Link to='/status'><button className='btn '>Cancel</button></Link></Col>
                            <Col><Link to='/status'><button className='btn '>Save</button></Link></Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default InsurerDefinition