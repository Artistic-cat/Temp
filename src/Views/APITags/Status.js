import React, {Component} from "react";
import "./APITag.css";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

/**
 * @Author: Rifas
 *
 * Insurer API Nomenclature Status Page
 * This page contains the wireframe for the page, has no implementations coded
 *
 * Calls the GET /gixapifiles API
 */
class Status extends Component {
    async componentDidMount() {
        // call the api, wait for response and set it to the state variable
        try {
            await axios.get(global.config.backend_ip
                + "/giixapifiles?giixTransactionTypeId=1")
                .then((response) => {
                    this.setState({
                            giixMasterFileList: response.data.apiResponse.data
                        }
                    )
                })
        } catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({error});
        }
    }

    render() {
        return (
            <>
                <Header/>
                <Container className="container-box">
                    <h3 className="apiTag-header">Status of API Tag Properties</h3>
                    <Table className="mapper-table" responsive striped hover>
                        <thead>
                        <tr>
                            <td>GiiX Master File</td>
                            <td>Insurer API File</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            (this.state != null ?
                                [...this.state.giixMasterFileList].map((data) =>
                                    <tr key={data.id}>
                                        <td>{data.name}</td>
                                        {/*// TODO: Set the appropriate Data in the insurer API file field*/}
                                        <td>Insurer {data.name}</td>
                                        {/*// TODO: Set the status of the file according to the response*/}
                                        <td>Pending</td>
                                        {/*// TODO: Enable only one based on status*/}
                                        <td>
                                            <span style={{color: "red"}}>Edit</span>
                                            <span style={{color: "blue"}}>Start</span>
                                            <span style={{color: "red"}}>Continue Draft</span>
                                        </td>
                                    </tr>
                                )
                                : "")
                        }
                        </tbody>
                    </Table>
                    <button className={"btn"}>Submit</button>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default Status;