import React, {Component} from 'react'
import "./MappingOfInsurerAPIFiles";
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
 * File Preview code is written in the FileDropBox.js
 * 
 */

class MappingOfInsurerAPIFiles extends Component{

    state = {
        
        api : {
            contentsofapi : 1
        },
        showApi : false
    }

    toggleApiHandler = () => {
        const isVisible = this.state.showApi;
        this.setState({
            showApi: !isVisible
        });
    }

    render(){

        let api = null;
        if(this.state.showApi) {
            api = (
                <div className = "api-files">
                    <p>Content of Api files/Url</p>
                </div>
            );
        }
        return(
            <div>
                <Header/>
                <div className='completed-status-bar'>
                    <div className='left-name'>Define-API Sequence</div>
                    <div className='status-icons'>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Map Insurer Api</div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br/>
                <Container className='container-box' style = {{marginRight : "15%"}}>
                    <br/>
                    <br/>
                    <div style = {{marginRight : "15%"}}>
                        <Table >
                            <thead style = {{backgroundColor : "#000A28", color : "#fff"}}>
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
                    </div>
                                                   
                    <br/>
                    <br/>
                    <Row className='navigation-buttons'>
                        <Col><Link to='/insurerapisequence'><button className='btn '>Back</button></Link></Col>
                        <Col><Link><button className='btn '>Save Draft</button></Link></Col>
                        <Col><Link to='/statusofapisetup'><button className='btn '>Next</button></Link></Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                            <h5>Api File Selection</h5>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Uploaded Files</th>
                                        <th>Select API Request/Response files</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col className = "w3-container">
                            <button className = "btn" onClick = {this.toggleApiHandler}>Preview</button>
                                 <div>{api}</div>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
                <br/>
            </div>
        )
    }
}

export default MappingOfInsurerAPIFiles