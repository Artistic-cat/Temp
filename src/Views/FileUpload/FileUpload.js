import React, {Component} from "react";
import "./FileUpload.css";
import axios from "axios";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container, Row, Col} from "react-bootstrap";
import FileDropBox from "../../Components/FlieDropBox/FileDropBox";
import {Link} from "react-router-dom";

class FileUpload extends Component {
    async componentDidMount() {
        // call the api, wait for response and set it to the state variable
        try {
            await axios.post(global.config.backend_ip
                + "/files")
                .then((response) => {
                    this.setState({
                            giixfileUpload: response.data.apiResponse.data
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
            <div>
                <Header/>
                <div className='completed-status-bar'>
                    <div className='left-name'>Files Upload</div>
                    <div className='status-icons'>
                        <div className='status-icon-active'>Upload Files</div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                        <div className='status-icon-incomplete'></div>
                    </div>
                </div>
                <br/>
                <Container className="container-box">
                    <div className="file-file_box">
                        <h4>Upload Your Files to Proceed</h4>
                        <div className={"m-4"}>
                            <FileDropBox/>
                        </div>
                    </div>
                    <Row className='navigation-buttons'>
                        <Col><Link to='/setup'><button className='btn '>Back</button></Link></Col>
                        <Col><Link to='/mapfile'><button className='btn '>Next</button></Link></Col>
                    </Row>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default FileUpload;