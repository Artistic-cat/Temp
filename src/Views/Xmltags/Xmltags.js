import React, { Component } from "react";
import "./Xmltags.css";
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import {Container, Table} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";



/**
 * @Author: Vidhi
 *
 * Master Dependency of XML/JSON Tags Page
 * This page contains the wireframe for the page, has no implementations coded
 *
 * Calls the GET /
 */

class Xmltags extends Component {

    state = {

        vehicle: {
            btypecode : 1,
            btypename : "New businees",
            riskenddate : "20190403",
            purchasedate : "20180312",
            vehage : 0,
            manfyear : 2018,
            makecode : 158,
            makename : "HONDA",
            modelcode : 1023942,
            modelname : "NEW JAZZ",
            variantcode : 1023496,
            modelparentcode : 1023492,
            fuelcode : 2,
            fuelname : "Diesel",
            age : 0,
            bodytypeid : 34
        },
         showVehicle : false 
    }

   toggleVehicleHandler = () => {
       const isVisible = this.state.showVehicle;
       this.setState({
           showVehicle : !isVisible
       });
   }

    async componentDidMount() {
        //calls the api, wait for the response and set it to the state variable 
        try{
                /**{TODO: Set the appropriate API in the xml/json tags of master dependency file field }*/
                await axios.get("")
                .then((response) =>{
                    this.setState({
                        insurerapiNomenclature: response.data.apiResponse.data
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

        let vehicle = null;
        if(this.state.showVehicle) {
            vehicle = (
                <div className = "xmlCard">
                    <p>functionality : validatequote</p>
                    <p>quote_type : full</p>
                    <p>btype_code: {this.state.vehicle.btypecode}</p>
                    <p>btype_name : {this.state.vehicle.btypename}</p>
                    <p>risk_startdate : {this.state.vehicle.risk_startdate}</p>
                    <p>risk_enddate : {this.state.vehicle.risk_enddate}</p>
                    <p>purchase_date : {this.state.vehicle.purchase_date}</p>
                    <p>veh_age : {this.state.vehicle.veh_age}</p>
                    <p>manf_year : {this.state.vehicle.manf_year}</p>
                    <p>make_code : {this.state.vehicle.make_code}</p>
                    <p>make_name : {this.state.vehicle.make_name}</p>
                    <p>model_parent_code : {this.state.vehicle.model_parent_code}</p>
                    <p>fuel_code: {this.state.vehicle.fuel_code}</p>
                    <p>fuel_name : {this.state.vehicle.fuel_name}</p>
                    <p>variant_name : {this.state.vehicle.variant_name}</p>
                    <p>age : {this.state.vehicle.age}</p>
                    <p>bodytype_id : {this.state.vehicle.bodytype_id}</p>
                </div>
            );
        }

        return(
            <div>
                <Header/>
                <Container className = "container-box">
                    <h3 className = "master-header">Master Dependency of Xml/Json Tags</h3>
                    <Table  responsive striped bordered hover style = {{width : "70%", marginLeft : "15%"}}>
                        <thead className = "headings" style = {{fontSize: "2.2vh"}}>
                            <tr>
                                <td>Insurer API - Nomenclature </td>
                                <td>Giix API - Nomenclature </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // (this.state!=null?
                                //   [...this.state.insurerapiNomenclature].map((data,key)=>
                                //       <tr className = "headings" key>
                                //          <td></td>
                                //          {/*// TODO: Set the appropriate Data in the insurer api-nomenclature and giix api-nomenclature table of xml/json tags of master dependency file field */}
                                //          <td></td>
                                //          {/*// TODO: Set the appropriate Data in the isnurer api-nomenclature and giix api-nomenclature table of xml/json tags of master dependency file field*/}

                                //      </tr>
                                //   )
                                // :"")
                            }

                        </tbody>

                    </Table>
                    <style type="text/css">
                    {`
                            .btn-flat {
                                background-color: #000A28 !important;
                                color: white !important;
                                outline: 0 !important;
                                border: 0 !important;
                                border-radius: 4px !important;
                                font-weight: normal !important;
                            }

                            .btn-xxl.active{
                                background-color: #0D7DBC !important;
                                color: white !important;
                                outline: 0 !important;
                                border: 0 !important;
                            }

                            .btn-xxl:hover{
                                background-color: #06517B !important;
                                color: white !important;
                                outline: 0 !important;
                                border: 0 !important;
                            }

                            .btn-xxl {
                            padding: 1em 1.5em !important;
                            font-size: 1em !important;
                            width: 15em !important;
                            height: 3.5em !important;
                            }

                    `}   
                    </style>

                <div className='mapping-options'>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton variant="flat" size="xxl" value={1}>Manually Map</ToggleButton>
                        <ToggleButton variant="flat" size="xxl" value={2}><Link to='/masterdependency/dependencymap'>Automatic Mapping</Link></ToggleButton>
                    </ToggleButtonGroup>
                    <Link className='mapping-option' to ="/Preview">Preview Master Dependencies</Link>
                </div>
                <div className = "manual-table">
                    <Table responsive striped hover>
                        <thead className = "headings" style = {{fontSize: "2.2vh"}}>
                            <tr>
                                <th>GiiX Standard Tag Name</th>
                                <th>Simple Name</th>
                                <th>Description</th>
                                <th>Insurer Mother Tags</th>
                                <th>Insurer Child Tags</th>
                                <th>Master Dependency</th>
                                <th>Logic Layer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*// TODO: Set the appropriate Data in the table related to manually map of xml/json tags of master dependency file field*/}
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
                <Row >
                    <Col className = "manual-table">
                        <Table responsive striped hover style = {{width :"90%"}}>
                            <thead className = "headings" style = {{fontSize: "2.2vh"}}>
                                <tr>
                                    <th>Insurer Master</th>
                                    <th>GiiX Master</th>
                                    <th>Simple Name</th>
                                    <th>Description</th>
                                    <th>Column Selection (Insurer)</th>
                                    <th>Column Selection (GiiX)</th>
                                    <th>Simple Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*// TODO: Set the appropriate Data in the table related to manually map of xml/json tags of master dependency file field*/}
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
                    </Col>
                    <Col className = "w3-container">
                        <button className="btn" onClick = {this.toggleVehicleHandler}>Preview Xml</button>
                                <div>{vehicle}</div> 
                    </Col>
                </Row>
                <div className = "wrapper">
                         {/* Buttons created which is set through link, helpful in connecting the next page */}
                        <Link to="/MasterDependency" className="btn" style = {{backgroundColor : "#710044", color : "#ffffff", borderRadius : "60px"}}>Cancel</Link>
                        <Link to="/" className ="btn" style = {{backgroundColor : "#710044", color : "#ffffff", borderRadius : "60px"}}>Save as Draft</Link>
                        <Link to="/" className ="btn" style = {{backgroundColor : "#710044", color : "#ffffff", borderRadius : "60px"}}>Next</Link>

                </div> 
                </Container>
                <Footer/> 
            </div>  
        )
    }
}
    
export default Xmltags;