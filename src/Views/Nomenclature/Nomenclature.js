import React, { Component } from "react";
import "./Nomenclature.css";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Checkbox } from "@material-ui/core";

class Nomenclature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxCheckedKey: [],
            nomenclatureFileList: []
        };
    }

    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/mastermap?insurerProductTransactionTypeId=156")
                .then((response) => {
                    this.setState({
                        nomenclatureFileList: response.data.apiResponse.data
                    })
                })

            await axios.get(global.config.backend_ip
                + "/giixMasterMapper?insurerProductTransactionTypeId=156")
                .then((response) => {
                    this.setState({
                        nomenclatureList: response.data.apiResponse.data
                    })
                })
        }
        catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({ error });
        }
    }

    handleOnCheckboxChange = (event) => {
        const { checkboxCheckedKey } = this.state;
        if (event.target.checked) {
            let checkedKeys = checkboxCheckedKey;
            checkedKeys.push(event.target.name);
            this.setState({ checkboxCheckedKey: checkedKeys })
        }
        else {
            // this.setState({ checkboxCheckedKey: "" })
            // checkedKeys =  checkboxCheckedKey.filter data !== event.target.name
        }
    }

    render() {
        const { checkboxCheckedKey, nomenclatureFileList } = this.state;
        return (
            <>
                <Header />
                <div className='completed-status-bar'>
                    <div className='left-name'>Set Up Master</div>
                    <div className='status-icons'>
                        <div className='status-icon-complete'></div>
                        <div className='status-icon-active'>Nomenclature</div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br />
                <Container className="container-box">
                    <Table className="mapper-table" responsive striped hover style={{ minWidth: 650 }}>
                        <thead className="headings" style={{ fontSize: "2.5vh" }}>
                            <tr>
                                <td>Giix Standard Masters</td>
                                <td>Insurer Master Not Available</td>
                                <td>Insurer Master Name</td>
                                <td>Insurer File Name</td>
                                <td>Insurer File Type</td>
                                <td>Verification hyperlink</td>
                            </tr>
                        </thead>
                        <tbody>
                            {nomenclatureFileList ?
                                [...(nomenclatureFileList || [])].map((data, key) =>
                                    <tr key={data.id}>
                                        <td>{data.name}</td>
                                        {/*// TODO: Set the appropriate Data in the status of master dependency file field*/}
                                        <td>
                                            <Checkbox checked={checkboxCheckedKey.find((cck) => cck.toString() === key.toString())} onChange={this.handleOnCheckboxChange} name={key} />
                                        </td>
                                        {/*// TODO: Set the status of the file according to the response*/}
                                        <td>
                                            <input
                                                type="text"
                                                className="txt"
                                                disabled={checkboxCheckedKey.find((cck) => cck.toString() === key.toString())}
                                            />
                                        </td>
                                        {/*// TODO: Enable only one based on status*/}
                                        <td>
                                            <button className="button-select">Master file Selection</button>
                                        </td>
                                        <td>
                                            <input value={key} type="text" className="txt" />
                                        </td>
                                        <td>
                                            <Link style={{ color: "blue" }}>Preview</Link>
                                        </td>
                                    </tr>
                                ) : <tr></tr>
                            }
                        </tbody>
                    </Table>
                    <Table className="mapper-table" style={{ minWidth: 650 }} responsive striped hover>
                        <thead className="headings" style={{ fontSize: "2.5vh" }}>
                            <tr>
                                <td>Insurer Specific Master</td>
                                <td>Generic Name</td>
                                <td>Simple Description</td>
                                <td>Insurer File Name</td>
                                <td>Insurer File Type</td>
                                <td>Verification hyperlink</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.state != null ?
                                    [...this.state.nomenclatureFileList].map((data, key) =>
                                        <tr key={data.id}>
                                            <td><input type="text" className="txt"></input></td>
                                            {/*// TODO: Set the appropriate Data in the status of master dependency file field*/}
                                            <td><input type="text" className="txt"></input></td>
                                            {/*// TODO: Set the status of the file according to the response*/}
                                            <td><input type="text" className="txt"></input></td>
                                            {/*// TODO: Enable only one based on status*/}
                                            <td><button className="button-select" onClick>Master file Selection</button></td>
                                            <td><input type="text" className="txt"></input></td>
                                            <td><Link style={{ color: "blue" }}>Preview</Link></td>

                                        </tr>

                                    )
                                    : "")
                            }
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <Row className='navigation-buttons'>
                        <Col><Link to='/mapfile'><button className='btn '>Back</button></Link></Col>
                        <Col><Link><button className='btn '>Save as Draft</button></Link></Col>
                        <Col><Link to='/status'><button className='btn ' style={{ width: "20vw" }}>Complete Master Nomenclature</button></Link></Col>
                    </Row>
                </Container>
                <Footer />
            </>

        )
    }
}

export default Nomenclature;


