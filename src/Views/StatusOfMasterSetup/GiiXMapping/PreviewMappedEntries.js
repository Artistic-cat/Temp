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
                <Container className="container-box">
                    <div>
                        <div className='preview-table'>
                            <Table>
                                <thread>
                                    <tr>
                                        {/* <th>Sr. No.</th> */}
                                        <th>Insurer Column Name</th>
                                        <th>GiiX Column Name</th>
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
                            <Col><Link to='/status/giixmapping'><button className='btn '>Back</button></Link></Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default PreviewMappedEntries