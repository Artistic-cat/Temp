import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import FileMapper from "../../Components/FileMapper/FileMapper";
import history from "../../Helpers/history";

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
            <div className="file-file_box" style={{marginTop: "5vh", left: "50%"}}>
                <h4>Map your Files to Proceed</h4>
                <div className={"m-4"}>
                    <FileMapper/>
                </div>
                <Row className='navigation-buttons'>
                    <Col><button className='btn ' onClick= {history.push("/files")}>Back</button></Col>
                    <Col><button className='btn ' onClick= {history.push("/Nomenclature")}>Next</button></Col>
                </Row>
            </div>
        )
    }
}

export default FileUpload;