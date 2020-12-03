import React, { Component} from "react";
import "./Xmltags.css";
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import {Container, Table} from "react-bootstrap";
import axios from "axios";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";

class Xmltags extends Component {
    async componentDidMount() {
        try{
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
        return(
            <div>
                <Header/>
                <Container>
                    <h3 className = "master-header">Master Dependency of Xml/Json Tags</h3>
                    <Table className = "complete-table" responsive striped bordered hover style = {{width : "70%", marginLeft : "20%"}}>
                        <thead>
                            <tr className = "headings">
                                <td>Insurer API - Nomenclature </td>
                                <td>Giix API - Nomenclature </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.state!=null?
                                  [...this.state.insurerapiNomenclature].map((data,key)=>
                                     <tr className = "headings">
                                         <td></td>
                                         <td></td>

                                     </tr>
                                  )
                                  :"")
                            }

                        </tbody>

                    </Table>
                    <style type="text/css">
                        {`
                            .btn-flat {
                                background-color: #000A28;
                                color: white;
                                outline: 0;
                                border: 0;
                            }

                            .btn-xxl.active{
                                background-color: #0D7DBC;
                                color: white;
                                outline: 0;
                                border: 0;
                            }

                            .btn-xxl:hover{
                                background-color: #06517B;
                                color: white;
                                outline: 0;
                                border: 0;
                            }

                            .btn-xxl {
                            padding: 1em 1.5em;
                            font-size: 1em;
                            width: 15em;
                            }

                        `}
                    </style>

                    <div className='mapping-options'>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton variant="flat" size="xxl" value={1} style = {{marginRight:"4%"}}>Manually Map</ToggleButton>
                        <ToggleButton variant="flat" size="xxl" value={2} style = {{marginRight:"3.5%"}}>Automatic Mapping</ToggleButton>
                    </ToggleButtonGroup>
                    <Link className='mapping-option' to ="/Preview">Preview Master Dependencies</Link>
                </div>

                </Container>
                <Footer/> 
            </div>  
        )
    }
}
    
export default Xmltags;