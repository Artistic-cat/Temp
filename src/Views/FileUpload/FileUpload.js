import React, {Component} from "react";
import "./FileUpload.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container} from "react-bootstrap";
import FileDropBox from "../../Components/FlieDropBox/FileDropBox";
import {Link} from "react-router-dom";

class FileUpload extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <div className="file-file_box">
                        <h4>Upload Your Files to Proceed</h4>

                        <div className={"m-4"}>
                            <FileDropBox/>
                        </div>
                        <div className={"m-4"}>
                            <button className="btn">Back</button>
                            <Link class="btn" to="/mapfile"><span>Next</span></Link>
                        </div>
                    </div>

                    <Link to='/setup'>
                        <h3>Back</h3>
                    </Link>

                </Container>

                <Footer/>
            </div>
        )
    }
}

export default FileUpload;