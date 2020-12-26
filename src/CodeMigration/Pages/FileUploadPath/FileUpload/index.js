import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import FileDropBox from "../../../Components/";
// import APICall from "../../AppConfig/Api";
// import axios from "axios";
import history from "../../Helpers/history";

class FileUpload extends Component {
    // constructor(props){
    //     super(props);
    //     this.state= 
    // }
    
    // async componentDidMount() {
    //     // call the api, wait for response and set it to the state variable
    //     try {
    //         await axios.post(global.config.backend_ip
    //             + "/files")
    //             .then((response) => {
    //                 this.setState({
    //                         giixfileUpload: response.data.apiResponse.data
    //                     }
    //                 )
    //             })
    //     } catch (error) {
    //         console.log(error.response);
    //         alert("An error occurred, please try again.");
    //         console.log({error});
    //     }
    // }
    render() {
        return (
            <div>
                <div className="file-file_box" stlye={{marginTop: '5vh', left: '50%'}}>
                    <h4>Upload Your Files to Proceed</h4>
                    <div className={"m-4"}>
                        <FileDropBox/>
                    </div>
                </div>
                <Row className='navigation-buttons'>
                    <Col><button className='btn ' onClick= {history.push("/setup")}>Back</button></Col>
                    <Col><button className='btn ' onClick= {history.push("/mapfile")}>Next</button></Col>
                </Row>
            </div>
        )
    }
}

export default FileUpload;