import React, {Component} from "react";
import "./FileUpload.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container} from "react-bootstrap";
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed";
import FileDropBox from "../../Components/FlieDropBox/FileDropBox";

class FileUpload extends Component {
    constructor(props) {
        super(props);
        new RecentlyUsed().setPath("FileUpload", window.location.href)
    }

    render() {
        return (
            <div>
                <Header/>
                {/*<Sidebar/>*/}
                {/*<RecentlyUsed />*/}
                <Container>
                    <div className="file-file_box">
                        <h4>Upload Your Files to Proceed</h4>

                        <div className={"m-4"}>
                            <FileDropBox/>
                        </div>
                    </div>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default FileUpload;