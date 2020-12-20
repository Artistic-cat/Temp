import React, { Component} from 'react'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import {Link} from 'react-router-dom'
import { Table} from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from 'react-bootstrap'
import axios from "axios"

import './GiiXMapping.css'

/*
 * @Author: Sristi
 *
 * Status Page 3- To preview the mapped entries in GiiX Mapping page.
 * 
 * This view uses the GET insurerMasterColumnMapStatus API but the columns are not implemented here.
 * currently using another API just as a sample.
 * The displaying of columns is commented out for reference.
 * 
 */

class PreviewMappedEntries extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/insurerMasterSetupStatus?insurerProductTransactionTypeId=156")
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
                    <div className='left-name'>Set Up Master</div>
                    <div className='status-icons'>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Preview Map</div>
                    </div>
                </div>
                <br/>
                <Container className="container-box">
                    <div>
                        <div className='preview-table'>
                            <Table>
                                <thread style={{display: 'table-header-group'}}>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Insurer Column Name</th>
                                        <th>GiiX Column Name</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Undo Mapping</th>
                                    </tr>
                                </thread >
                                <tbody>
                                    {
                                        (this.state != null ?
                                            [...this.state.MapStatus].map((data) =>
                                                <tr key={data.insurerMasterRepoId}>
                                                    <td>{data.insurerMasterRepoId}</td>
                                                    <td>{data.insurerMasterName}</td>
                                                    <td>{data.giixMasterName}</td>
                                                    <td>aaaaa</td>
                                                    <td>aaaaa</td>
                                                    <td style={{color: 'red'}}>Undo Mapping</td>
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
                            <Col><Link to='/status/giixmapping'><button className='btn '>Back</button></Link></Col>
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

export default PreviewMappedEntries