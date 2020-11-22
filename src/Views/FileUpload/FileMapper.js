import React, {Component} from "react";
import "./FileUpload.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container} from "react-bootstrap";
import FileMapper from "../../Components/FileMapper/FileMapper";
import {Link} from "react-router-dom";

class FileUpload extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <div className="file-file_box">
                        <h4>Map your Files to Proceed</h4>

                        <div className={"m-4"}>
                            <FileMapper/>
                        </div>
                        <div className={"m-4"}>
                            <Link to="/files">
                                <button className="btn">
                                    Back
                                </button>
                            </Link>
                            <Link to="#">
                                <button className="btn">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default FileUpload;