import React, {Component} from "react";
import "./FileUpload.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Button, Container} from "react-bootstrap";
import FileDropBox from "../../Components/FlieDropBox/FileDropBox";

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
                            <Button>Back</Button>
                        </div>
                    </div>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default FileUpload;