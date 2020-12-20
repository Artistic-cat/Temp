import React, {Component} from 'react'
import {Table, Row, Col, Container} from 'react-bootstrap'
import axios from "axios"
import {Link} from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

import './DefineAPISequence.css'

/*
 * @Author: Sristi
 *
 * Define API Sequence Page 1- Insurer API Sequence.
 * Uses GET insureApiSequence, and POST insureApiSequence
 * 
 * POST is not used yet since a few changes are required in the pages
 * 
 */

class APISequence extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/insureApiSequence?insurerProductTransactionTypeId=167")
                .then((response) => {
                    this.setState({
                        insurerApiSequenceList: response.data.apiResponse.data[0].apiSequence
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
                        <div className='status-icon-active'>Insurer Api Sequence</div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br/>
                <Container className='container-box'>
                    <br/>
                    <br/>
                    <Table size="sm" borderless hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>GiiX Standard APIs</th>
                                <th>Insurer API Calls</th>
                                <th>API Simultaneously Called</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.state != null ?
                                    [...this.state.insurerApiSequenceList].map((data) =>
                                        <tr key={data.orderId}>
                                            <td><h5><button style={{ backgroundColor: 'rgb(147, 192, 207)',
                                                                    border: 'none',
                                                                    color: 'white',
                                                                    outline: '0'
                                                                    }}>+</button></h5></td>
                                            <td><h5>{data.giixApiRepo.name}</h5></td>
                                            <td><h5>{data.customName}</h5></td>
                                            <td><h5>Sequence {data.orderId}</h5></td>
                                        </tr>
                                    )
                                    : "")
                            }
                        </tbody>
                    </Table>
                    <br/>
                    <br/>
                    <Row className='navigation-buttons'>
                        <Col><Link to='/status'><button className='btn '>Back</button></Link></Col>
                        <Col><Link><button className='btn '>Save Draft</button></Link></Col>
                        <Col><Link to='/mappingofinsurerapifiles'><button className='btn '>Next</button></Link></Col>
                    </Row>
                    <br/>
                    <br/>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default APISequence