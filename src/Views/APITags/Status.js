import React, {Component} from "react";
import "./APITag.css";
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


class Status extends Component {
    async componentDidMount() {
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
                                        <td>Insurer {data.name}</td>
                                        <td>Pending</td>
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