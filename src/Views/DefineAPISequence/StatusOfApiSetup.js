import React,{Component} from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Table, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from "axios"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


/*
 * @Author: Sristi
 *
 * Define API Sequence Page 3- Status of API Setup.
 * This is just the wireframe but since it's similar to StatusofMasterSetup.js, that API is used. Need to change it.
 * Change API and table's to what's required.
 * 
 */

class Status extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/insurerMasterSetupStatus?insurerProductTransactionTypeId=156")
                .then((response) => {
                    this.setState({
                            APIStatusList: response.data.apiResponse.data
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
                    <div className='left-name'>Define-API Sequence</div>
                    <div className='status-icons'>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Api Setup Status</div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br/>
                <Container className='container-box'>
                    <div className='status-table'>
                        <br/>
                        <br/>
                        <Table size="sm" borderless hover>
                            <thead>
                                <tr>
                                    <th>GiiX API File</th>
                                    <th>Insurer API File</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            (this.state != null ?
                                [...this.state.APIStatusList].map((data) =>
                                    <tr key={data.insurerFileManager}>
                                        <td>{data.giixMasterName ? <h5>{data.giixMasterName}</h5>: <h5 style={{ color: 'grey' }}>Insurer Specific API</h5>}</td>
                                        <td>{data.giixMasterName ? <h5>{data.insurerMasterName}</h5>: <h5 style={{ color: 'grey' }}>{data.insurerMasterName}</h5>}</td>
                                        <td>
                                            {/* Check what status 1 is for. */}
                                            { data.giixMasterName ?
                                            data.status===1 ? <h5>No Columns Available</h5>
                                            :data.status===2 ? <h5>Not Initiated</h5>
                                            :data.status===3 ? <h5>Mapped</h5>
                                            :data.status===4 ? <h5>Saved as Draft</h5>
                                            : ""
                                            :data.status===1 ? <h5 style={{ color: 'grey' }}>No Columns Available</h5>
                                            :data.status===2 ? <h5 style={{ color: 'grey' }}>Not Initiated</h5>
                                            :data.status===3 ? <h5 style={{ color: 'grey' }}>Description Completed</h5>
                                            :data.status===4 ? <h5 style={{ color: 'grey' }}>Saved as Draft</h5>
                                            : ""
                                        }
                                        </td>
                                        <td >
                                            {data.giixMasterName ?
                                            data.status===1 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Edit and Redo</h5></Link>
                                            :data.status===2 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Start Mapping</h5></Link>
                                            :data.status===3 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Edit and Redo</h5></Link>
                                            :data.status===4 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Continue Draft</h5></Link>
                                            : ""
                                            :data.status===1 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Edit and Redo</h5></Link>
                                            :data.status===2 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Start Description</h5></Link>
                                            :data.status===3 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Edit and Redo</h5></Link>
                                            :data.status===4 ? <Link to='/statusofapisetup/entitymapping' style={{ color: 'red' }}><h5>Continue Draft</h5></Link>
                                            : ""
                                            }
                                        </td>
                                        
                                    </tr>
                                )
                                : "")
                        }
                            </tbody>
                        </Table>
                    </div>
                    <br/>
                    <br/>
                    <Row className='navigation-buttons'>
                        <Col><Link to='/mappingofinsurerapifiles'><button className='btn '>Back</button></Link></Col>
                        <Col><Link><button className='btn '>Save Draft</button></Link></Col>
                        <Col><Link to='/MasterDependency'><button className='btn '>Next</button></Link></Col> 
                        {/* Change Link of Next and add button POST Functionality. Activate button only when all above are filled */}
                    </Row>
                </Container>
                <Footer/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Status