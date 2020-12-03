import React, {Component} from 'react'
import {Table, Row, Col, Container} from 'react-bootstrap'
import axios from "axios"
import {Link} from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

/*
 * @Author: Sristi
 *
 * Define API Sequence Page 2- Mapping of Insurer API files.
 * 
 * This page is just a wireframe and has no api used. 
 * File Preview code is written in the file drop box series.
 * 
 */

class MappingOfInsurerAPIFiles extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Container className='container-box'>
                    <br/>
                    <br/>
                    <Table>
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>GiiX Standard API Name</th>
                                <th>Insurer API Request/Response Name</th>
                                <th>URL Applicable</th>
                                <th></th>
                                <th>Insurer File Name</th>
                                <th>Insurer File Type</th>
                                <th>Actual URL</th>
                                <th>Verification Hyperlink</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>
                    <br/>
                    <Row className='navigation-buttons'>
                        <Col><Link to='/insurerapisequence'><button className='btn '>Back</button></Link></Col>
                        <Col><Link><button className='btn '>Save Draft</button></Link></Col>
                        <Col><Link to='/statusofapisetup'><button className='btn '>Next</button></Link></Col>
                    </Row>
                    <br/>
                    <br/>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default MappingOfInsurerAPIFiles