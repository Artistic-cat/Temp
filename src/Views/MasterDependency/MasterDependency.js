import React, { Component } from "react";
import "./MasterDependency.css";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";

/**
 * @Author: Vidhi
 *
 * Master Dependency Nomenclature Status Page
 * This page contains the wireframe for the page, has no implementations coded
 *
 * Calls the GET /gixapifiles API
 */

class MasterDependency extends Component {
    async componentDidMount() {
        //calls the api, wait for the response and set it to the state variable 
        try{
            await axios.get(global.config.backend_ip +"/giixapifiles?giixTransactionTypeId=1")
            .then((response) =>{
                this.setState({
                    giixMasterFileList: response.data.apiResponse.data
                })
            })
        }
        catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({error});
        }
    }
    render() {
        return(
            <>
               <Header/>
               <Container className = "container-box">
                   <h3 className = "master-header" style = {{ marginBottom : "0px"}}>Status of Master Dependency</h3>
                   <Table className = "mapper-table" responsive striped hover>
                       <thead className = "headings" style = {{fontSize : "2.5vh"}}>
                           <tr>
                               <td>Giix Master File</td>
                               <td>Insurer API File</td>
                               <td>Status</td>
                               <td>Action Button</td>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               (this.state != null?
                                [...this.state.giixMasterFileList].map((data, key)=>
                                   <tr key={data.id}>
                                       <td>{data.name}</td>
                                       {/*// TODO: Set the appropriate Data in the status of master dependency file field*/}
                                       <td>Insurer {data.name}</td>
                                        {/*// TODO: Set the status of the file according to the response*/}
                                       <td>Pending</td>
                                       {/*// TODO: Enable only one based on status*/}
                                       <td>
                                           <span style={{color : "red" }}>Edit</span>
                                           <span style={{color : "blue", paddingLeft : "4%"}}>Start</span>
                                           <span style={{color : "green", paddingLeft : "4%"}}>Continue Draft</span>
                                       </td>
                                   </tr>
                                
                                )
                               :"")
                           }
                       </tbody>

                   </Table>
                   <div className = "wrapper">
                        <Link to="/" className="btn" style = {{backgroundColor : "#710044", color : "#ffffff", borderRadius : "60px"}}>Cancel</Link>
                        <Link to="/Xmltags" className ="btn" style = {{backgroundColor : "#710044", color : "#ffffff", borderRadius : "60px"}}>Next</Link>
                   </div> 
               </Container>
                <Footer/> 
            </>
        )

    }
}
export default MasterDependency;




