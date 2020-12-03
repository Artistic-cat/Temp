import React, { Component } from "react";
import "./MasterDependency.css";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

class MasterDependency extends Component {
    async componentDidMount() {
        try{
            await axios.get("http://13.229.56.134:1337/giixapifiles?giixTransactionTypeId=1")
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
            <div>
               <Header/>
               <Container className = "container-box">
                   <h3 className = "master-header">Status of Master Depenency</h3>
                   <Table className = "complete-table" responsive striped hover style = {{width : "90%", marginLeft : "10%"}}>
                       <thead>
                           <tr className = "headings">
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
                                       <td>Insurer {data.name}</td>
                                       <td>Pending</td>
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
            </div>
        )

    }
}
export default MasterDependency;




