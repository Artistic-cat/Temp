import React, {Component} from "react";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container, Table} from "react-bootstrap";


class FileMapper extends Component {

    getFileList() {
        return {
            data: [
                {
                    name: "City Master",
                    type: "csv",
                    category: null
                },
                {
                    name: "Pin-code Master",
                    type: "xls",
                    category: null
                },
                {
                    name: "API Help File",
                    type: "pdf",
                    category: null
                },
                {
                    name: "API File",
                    type: "json",
                    category: null
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
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
                            [...this.getFileList().data].map((data) =>
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.type}</td>
                                    <td>{data.category}</td>
                                    <td style={{color: "red"}}>&#10060;</td>
                                </tr>
                            )
                        }
                    </Table>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default FileMapper;