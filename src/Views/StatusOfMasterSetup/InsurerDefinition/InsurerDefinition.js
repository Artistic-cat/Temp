import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {Container} from 'react-bootstrap'
import axios from "axios"

/*
 * @Author: Sristi
 *
 * Status Page 2- Insurer Description Page.
 * 
 * This view does not have the api integrated. Needs information for two tables.
 * The displaying of columns is commented out for reference.
 * 
 */

class InsurerDefinition extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/") //Write the api url for the Insurer Name Column (after what's defined in global.config.backend_ip) inside ""
                .then((response) => {
                    this.setState({
                            insurerTableColumnItems: response.data.apiResponse.data
                        }
                    )
                })
            await axios.get(global.config.backend_ip
                + "/") //Write the api url for the Insurer's Column Name, Name, Description 
                .then((response) => {
                    this.setState({
                            insurerDescriptionsColumnItems: response.data.apiResponse.data
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
                        <br/>
                        <br/>
                        <Col>
                            <Row>
                                <div className='insurer-table'>
                                    <Table bordered>
                                        <thread style={{display: 'table-header-group'}}>
                                            <tr>
                                                <th>Insurer Master File</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                            </tr>
                                        </thread>
                                        <tbody>
                                            <tr>
                                                <td>Proposal Type</td>
                                                <td>aaaa</td>
                                                <td>aaaaaaaaaa</td>
                                            </tr>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.insurerTableColumnItems].map((data) =>
                                                        <tr key={data.key}>
                                                            <td>{data.insurerMasterFileName}</td>
                                                            <td>{data.Name}</td>
                                                            <td>{data.Description}</td> 
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
                                        </tbody>
                                    </Table>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <Table bordered>
                                        <thread style={{display: 'table-header-group'}}>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Column Name</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                            </tr>
                                        </thread>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>column 1</td>
                                                <td><input type='text'/></td>
                                                <td><input type='text'/></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>column 1</td>
                                                <td><input type='text'/></td>
                                                <td><input type='text'/></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>column 1</td>
                                                <td><input type='text'/></td>
                                                <td><input type='text'/></td>
                                            </tr>
                                            {/* {
                                                (this.state != null ?
                                                    [...this.state.insurerDescriptionsColumnItems].map((data) =>
                                                        <tr key={data.key}>
                                                            <td>{data.insurerMasterFileName}</td>
                                                            <td>{data.Name}</td>
                                                            <td>{data.Description}</td> 
                                                        </tr>
                                                    )
                                                    : "")
                                            } */}
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
                        <br/>
                        <br/>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default InsurerDefinition