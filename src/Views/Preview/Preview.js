import React, { Component } from "react";
import "./Preview.css";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { render } from "@testing-library/react";
// import { Link } from "react-router-dom";

class Preview extends Component {
    async componentDidMount() {
        try{
            await axios.get("")
            .then((response) => {
                this.setState({
                    giixstandardNomenclature : response.data.apiResponse.data
                })
            })
        }
        catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again");
        }
    }
    render() {
        return(
            <div>
                <Header/>
                <Container className = "container-box">
                    <Table className = "complete-map" responsive striped bordered hover style = {{width : "100%"}}>
                        <thead>
                            <tr className = "headings">
                                <td>Giix Standard Nomenclature</td>
                                <td>Simple Name</td>
                                <td>Description</td>
                                <td>Insurer Mother tags</td>
                                <td>Insurer Child tags</td>
                                <td>Master Dependency</td>
                                <td>Logic Layer</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.state!=null?
                                    [...this.state.giixstandardNomenclature].map((data, key) =>
                                        <tr>
                                           <td>ddh</td>
                                           <td>ffg</td>
                                           <td>ffg</td>
                                           <td>ffg</td>
                                           <td>ffg</td>
                                           <td>ffg</td>
                                           <td><input type = "checkbox"/></td>
                                        </tr>
                                    )
                                    :"")
                            }
                        </tbody>
                    </Table>

                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Preview;