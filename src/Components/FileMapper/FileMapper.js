import React, {Component} from "react";
import "./FileMapper.css";

import {Table} from "react-bootstrap";


class FileMapper extends Component {

    getFileList = {
        data: [
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
    };

    onChangeValue(event) {
        console.log(event.target.value);
        this.getFileList.data.find(item => item.name).category = event.target.value;
        console.log(this.getFileList)
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
                {
                    [...this.getFileList.data].map((data) =>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.type}</td>
                            <td>
                                <div onChange={(event) => {
                                    this.getFileList.data.find(id => id.id === data.id).category = event.target.value;
                                    console.log(this.getFileList.data)
                                }
                                }>
                                    <input style={{marginLeft: '5%'}} type="radio" value="api_file"
                                           name="file_type"/> API File
                                    <input style={{marginLeft: '5%'}} type="radio" value="master_file"
                                           name="file_type"/> Master File
                                    <input style={{marginLeft: '5%'}} type="radio" value="help_file"
                                           name="file_type"/> Help File
                                </div>
                            </td>
                            <td style={{color: "red"}}>&#10060;</td>
                        </tr>
                    )
                }
            </Table>
        )
    }
}

export default FileMapper;