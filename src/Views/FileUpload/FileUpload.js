import React, {Component} from "react";
import "./FileUpload.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container, Row, Col} from "react-bootstrap";
import FileDropBox from "../../Components/FlieDropBox/FileDropBox";
import {Link} from "react-router-dom";

class FileUpload extends Component {
    render() {
        return (
            <div>
                <Header/>
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