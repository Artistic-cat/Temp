import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table} from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'
import axios from "axios"

/*
 * @Author: Sristi
 *
 * Define API Sequence Page 3iii- Preview Mapped Entries.
 * 
 * This is just the wireframe but since it's similar to GiiXMapping.js, that API is used. Need to change it.
 * Change API to what's required.
 * 
 */

class PreviewMappedEntries extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/insurerMasterColumnMapStatus?insurerMasterRepoId=5")
                .then((response) => {
                    this.setState({
                            MapStatus: response.data.apiResponse.data
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
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Preview API map</div>
                    </div>
                </div>
                <br/>
                <Container className="container-box">
                    <div>
                        <div className='preview-table'>
                            <br/>
                            <br/>
                            <Table>
                                <thread>
                                    <tr>
                                        {/* <th>Sr. No.</th> */}
                                        <th>Sr. No.</th>
                                        <th>Insurer API File</th>
                                        <th>GiiX API File</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Undo Mapping</th>
                                    </tr>
                                </thread>
                                <tbody>
                                    {/* {
                                        (this.state != null ?
                                            [...this.state.MapStatus].map((data) =>
                                                <tr key={data.id}>
                                                    <td>{data.insurerColumnName}</td>
                                                    <td>{data.giixMasterColumnRepoId}</td>
                                                    <td>{data.freetext}</td>
                                                    <td>{data.insurerColumnDescription}</td>
                                                    <td>Undo Mapping</td>
                                                </tr>
                                            )
                                            : "")
                                    } */}
                                </tbody>
                            </Table>
                        </div>
                        <br/>
                        <br/>
                        <Row className='navigation-buttons'>
                            <Col><Link to='/statusofapisetup/entitymapping'><button className='btn '>Back</button></Link></Col>
                            <Col><Link to='/MasterDependency'><button className='btn '>Next</button></Link></Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default PreviewMappedEntries