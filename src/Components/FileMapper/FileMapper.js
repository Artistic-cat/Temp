import React, {Component} from "react";
import "./FileMapper.css";

import {Table} from "react-bootstrap";


class FileMapper extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fileList: this.componentDidMount()
        }
    }

    componentDidMount() {
        return [
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
                category: null
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
                category: null
            }
        ]
    }

    render() {
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
                            <td>{data.name}</td>
                            <td>{data.type}</td>
                            <td>
                                <div onChange={(event) => {
                                    // set the category of the data item to the selected radio button value
                                    this.state.fileList.find(id => id.id === data.id).category = event.target.value;
                                }
                                }>
                                    <input style={{marginLeft: '5%'}} type="radio" value="api_file"
                                           name={"file_type" + key}/> API File
                                    <input style={{marginLeft: '5%'}} type="radio" value="master_file"
                                           name={"file_type" + key}/> Master File
                                    <input style={{marginLeft: '5%'}} type="radio" value="help_file"
                                           name={"file_type" + key}/> Help File
                                </div>
                            </td>
                            <td><span onClick={(event) => {
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