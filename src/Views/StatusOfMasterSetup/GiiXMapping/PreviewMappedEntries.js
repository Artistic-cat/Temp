import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table} from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'

import './GiiXMapping.css'


class PreviewMappedEntries extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Container className="container-box">
                    <div>
                        <div className='preview-table'>
                            <Table>
                                <thread>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Insurer Column Name</th>
                                        <th>GiiX Column Name</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Undo Mapping</th>
                                    </tr>
                                </thread>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <br/>
                        <br/>
                        <Row className='navigation-buttons'>
                            <Col><Link to='/setup/giixmapping'><button className='btn '>Back</button></Link></Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default PreviewMappedEntries