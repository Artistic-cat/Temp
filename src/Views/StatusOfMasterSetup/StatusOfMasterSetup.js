import React,{Component} from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Table, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Status extends Component{
    render(){        
        return(
            <div>
                <Header/>
                <Container>
                    <div className='status-table'>
                        <Table size="sm" borderless>
                            <thead>
                                <tr>
                                    <th>GiiX Master File</th>
                                    <th>Insurer Master File</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><Link to=''></Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    {/* <Tables header={header} data={data} /> */}
                    <div className='nav-buttons'>
                        {/* For the connecting buttons */}
                        <Link><button className='btn'></button>Back</Link>
                        <Link><button className='btn'></button>Save Draft</Link>
                        <Link><button className='btn'></button>Next</Link>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Status