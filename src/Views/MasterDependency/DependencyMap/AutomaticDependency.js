import React, {Component} from "react";
import "./AutomaticDependency.css";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";


/**
 * @Author: Vidhi
 *
 * Master Dependency Nomenclature Automatic Mapping Page
 * This page contains the wireframe for the page, has no implementations coded
 *
 * Calls the GET /
 */

class AutomaticDependency extends Component {
    async componentDidMount() {
        //calls the api, wait for the response and set it to the state variable 
        try {
            /**{TODO: Set the appropriate API in the table realted to automatic mapping of xml/json tags of master dependency file field }*/
            await axios.get(global.config.backend_ip
                + "/giixmastersample?masterRepoId=1")
                .then((response) => {
                    this.setState({
                            Automaticdependencymap: response.data.apiResponse.data
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
               <Container className = "container-box">
                   <h3>Automatic Mapping Screen</h3>
                   <Row>
                       <Col>
                          <Table responsive striped hover style ={{marginTop:"2%"}}>
                              <thead className="table-head">
                                  <tr>
                                      <th>Insurer API Files</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {
                                    //   (this.state!=null ?
                                    //     [...this.state.MapStatus].map((data)=>
                                    //        <tr key>
                                    //            <td></td>
                                    //             {/*// TODO: Set the appropriate Data in the insurer api-files related to automatic mapping of xml/json tags of master dependency file field */}
                                    //        </tr>
                                    //     )
                                    //   :"")
                                  }
                              </tbody>
                          </Table>
                       </Col>
                       <Col>
                       <Table responsive striped hover style ={{marginTop:"2%"}}>
                              <thead className="table-head">
                                  <tr>
                                      <th>GiiX API Files</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {
                                    //   (this.state!=null ?
                                    //     [...this.state.MapStatus].map((data)=>
                                    //        <tr key>
                                    //            <td></td>
                                    //             {/*// TODO: Set the appropriate Data in the giix api-file table of automatic mapping of xml/json tags of master dependency file field */}
                                    //        </tr>
                                    //     )
                                    //   :"")
                                  }
                              </tbody>
                          </Table>
                       </Col>
                       <Table responsive striped bordered hover style ={{marginTop:"2%"}}>
                            <thead className = "headings" >
                                <tr>
                                    <th>Sr. No.</th> 
                                    <th>Giix Master Name</th>
                                    <th>Column Name</th>
                                    <th>Giix Standard Tag Name</th>
                                    <th>Insurer Mother Tags</th>
                                    <th>Insurer Child Tags</th>
                                    <th>Column Name(Insurer)</th>
                                    <th>Simple Name</th>
                                    <th>Description</th>
                                    <th>Insurer Master Name</th>
                                    <th>Simple Name</th>
                                    <th>Description</th>
                                    <th>Verified</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {/*// TODO: Set the appropriate Data in the table of verified data related to automatic mapping of xml/json tags of master dependency file field */}
                                 {
                                    (this.state != null ?
                                        [...this.state.Automaticdependencymap].map((data, key) =>
                                            <tr style = {{fontSize : "2vh"}} key={data.id}>
                                                <td>{data.Id}.</td>
                                                <td>{data.model}</td>
                                                <td>{data.vehicleCode}</td>
                                                <td>{data.bodyTypeName}</td>
                                                <td>{data.variant}</td>
                                                <td>{data.segmentCode}</td>
                                                <td>{data.segmentName}</td>
                                                <td><input type = "text" className = "box"/></td>
                                                <td><input type = "text" className = "box"/></td>
                                                <td>{data.bodyTypeName}</td>
                                                <td><input type ="text" className = "box"/></td>
                                                <td><input type = "text" className = "box"/></td>
                                                <td><input type ="checkbox" value="2"/></td>
                                                {/* <td>{data.insurerColumnDescription}</td>
                                                <td>Undo Mapping</td> */}
                                            </tr>
                                        )
                                        : "")
                                } 
                            </tbody>
                       </Table>
                   </Row>
                   <br/>
                   <br/>
                   <div className = "wrapper">
                         {/* Buttons created which is set through link, helpful in connecting the next page */}
                        <Link to="/Xmltags" className="btn" style = {{backgroundColor : "#710044", color : "#ffffff", borderRadius : "60px"}}>Back</Link>
                        <Link to="/Preview" className ="btn" style = {{backgroundColor : "#710044", color : "#ffffff", borderRadius : "60px", width : "auto"}}>Save Verified Mapping</Link>
                   </div> 
               </Container>
               <Footer/>
           </div>

        )
        
    }    
}
export default AutomaticDependency;