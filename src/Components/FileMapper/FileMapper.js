import React, {Component} from "react";
import "./FileMapper.css";

import {Table} from "react-bootstrap";
import axios from "axios";

/**
 * @Author: Rifas
 *
 * File Mapper Component
 * This component contains the implementation to map the uploaded files
 * against API File, Master File or Help File
 *
 * Uses the GET /files API
 */
class FileMapper extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fileList: []
        }
    }

    async componentDidMount() {
        // wait for the response from the API and set the state variable to render the table
        try {
            await axios.get(global.config.backend_ip + "/files?productTransactionTypeId=155")
                .then((response) => {
                    this.setState({fileList: response.data.apiResponse.data})
                });
        } catch (error) {
            alert("An error Occurred, please try again later.");
            console.log(error);
        }
        /*return [
            {
                id: 1,
                name: "City Master",
                type: "csv",
                category: null
            },
            {
                id: 2,
                name: "Pin-code Master",
                type: "xls",
                category: "master_file"
            },
            {
                id: 3,
                name: "API Help File",
                type: "pdf",
                category: null
            },
            {
                id: 4,
                name: "API File",
                type: "json",
                category: "api_file"
            }
        ]*/
    }

    render() {
        const fileType = (fileName) => {
            return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
        }

        return (
            <Table className="mapper-table" responsive hover>
                <thead>
                <tr>
                    <td>File Name</td>
                    <td>File Type</td>
                    <td>File Category</td>
                    <td>Remove File</td>
                </tr>
                </thead>
                <tbody>
                {
                    // loop through state array of key fileList and render it as a table
                    [...this.state.fileList].map((data, key) =>
                        <tr key={data.id}>
                            <td>{data.fileName}</td>

                            {/* TODO: Add preview to the file using the file path returned from the API.*/}

                            <td>{fileType(data.filePath) + " " + data.fileType}</td>
                            <td>
                                <div onChange={(event) => {
                                    // set the category of the data item to the selected radio button value
                                    this.state.fileList.find(id => id.id === data.id).category = event.target.value;
                                }
                                }>
                                    {/*
                                    // put this in input once the files api has been updated to use the file category
                                    checked={data.category === "api_file"}
                                    checked={data.category === "master_file"}
                                    checked={data.category === "help_file"}
                                    */}
                                    <input style={{marginLeft: '5%'}}
                                           type="radio" value="api_file"
                                           name={"file_type" + key}/> API File
                                    <input style={{marginLeft: '5%'}}
                                           type="radio" value="master_file"
                                           name={"file_type" + key}/> Master File
                                    <input style={{marginLeft: '5%'}}
                                           type="radio" value="help_file"
                                           name={"file_type" + key}/> Help File
                                </div>
                            </td>
                            <td><span onClick={() => {
                                //  remove the element clicked
                                this.state.fileList.splice(key, 1);

                                // set it back to the state array
                                this.setState({
                                    fileList: this.state.fileList
                                })
                            }} style={{color: "red"}}>&#10060;</span></td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        )
    }
}

export default FileMapper;