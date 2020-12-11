import React, {Component} from "react";
import "./FileUpload.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container, Row, Col} from "react-bootstrap";
import FileMapper from "../../Components/FileMapper/FileMapper";
import {Link} from "react-router-dom";

/**
 * @Author: Rifas
 *
 * File Mapper Page
 * This page allows the user to tag/map the files uploaded against
 * API File, Master File or Help File and remove them as required
 *
 * Uses the FileMapper Component
 */
class FileUpload extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container className="container-box">
                    <div className="file-file_box">
                        <h4>Map your Files to Proceed</h4>

                        <div className={"m-4"}>
                            <FileMapper/>
                        </div>
                    </div>
                    <Row className='navigation-buttons'>
                        <Col><Link to='/files'><button className='btn '>Back</button></Link></Col>
                        <Col><Link to='/nomenclature'><button className='btn '>Next</button></Link></Col>
                    </Row>
                    <br/>
                    <br/>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default FileUpload;