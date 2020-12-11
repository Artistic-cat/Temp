import React from "react";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./Nomenclature.css";
import { Link } from "react-router-dom";


//import { render } from '@testing-library/react'

//import ReactDOM from "react-dom";

//import Header from '../../Components/Header/Header';
//import Footer from '../../Components/Footer/Footer';

// export  default class Nomenclature extends Component {
//     render() {
//         const columns = [
//             {
//                 Header : "Giix Standard Masters",
//                 accessor : "col_1"
//             },
//             {
//                 Header : "Insurers Master Not Available",
//                 accessor : "col_2"
//             },
//             {
//                 Header : "Insurer Master Name",
//                 accessor : "col_3"
//             },
//             {
//                 Header : "Insurer File Name",
//                 accessor : "col_4"
//             },
//             {
//                 Header : "Insurer File Type",
//                 accessor : "col_5"
//             },
//             {
//                 Header : "Verification hyperlink",
//                 accessor : "col_6"
//             }
//         ]

        //  const rows = [
        //     {
        //         col_1 : "Make Model Master",
        //         col_2 : <input type = "checkbox" value = "2"/>,
        //         col_3 : <input type = "text" name = "mmm" />,
        //         col_4 : <select name = "make_model_master" id = "#">
        //                     <option value = "Master file Selection">Master File Selection</option>
        //                     <option value = "Insurer file Selection">Insurer File Selection</option>
        //                 </select>,
        //         col_5 : <select name = "file type" id ="@">
        //                     <option value = "csv">.csv</option>
        //                     <option value = "xlsx">.xlsx</option>
        //                     <option value = "json">.json</option>
        //                 </select>,
        //         col_6 : <a href = "url"><u>Preview</u></a>
        //     },

        //     {
        //         col_1 : "City District Master",
        //         col_2 : <input type = "checkbox" value = "2"/>,
        //         col_3 : <input type = "text" name = "mmm" />,
        //         col_4 : <select name = "city_district_master" id = "#">
        //                     <option value = "Master file Selection">Master File Selection</option>
        //                     <option value = "Insurer file Selection">Insurer File Selection</option>
        //                 </select>,
        //         col_5 : <select name = "file type" id ="@">
        //                     <option value = "csv">.csv</option>
        //                     <option value = "xlsx">.xlsx</option>
        //                     <option value = "json">.json</option>
        //                 </select>,
        //         col_6 : <a href = "url"><u>Preview</u></a>
        //     },
        //     {
        //         col_1 : "Covers Master",
        //         col_2 : <input type = "checkbox" value = "2"/>,
        //         col_3 : <input type = "text" name = "mmm" />,
        //         col_4 : <select name = "covers_master" id = "#">
        //                     <option value = "Master file Selection">Master File Selection</option>
        //                     <option value = "Insurer file Selection">Insurer File Selection</option>
        //                 </select>,
        //         col_5 : <select name = "file type" id ="@">
        //                     <option value = "csv">.csv</option>
        //                     <option value = "xlsx">.xlsx</option>
        //                     <option value = "json">.json</option>
        //                 </select>,
        //         col_6 : <a href = "url"><u>Preview</u></a>
        //     },
        //     {
        //         col_1 : "Pincode Master",
        //         col_2 : <input type = "checkbox" value = "2"/>,
        //         col_3 : <input type = "text" name = "mmm" />,
        //         col_4 : <select name = "pincode_master" id = "#">
        //                     <option value = "Master file Selection">Master File Selection</option>
        //                     <option value = "Insurer file Selection">Insurer File Selection</option>
        //                 </select>,
        //         col_5 : <select name = "file type" id ="@">
        //                     <option value = "csv">.csv</option>
        //                     <option value = "xlsx">.xlsx</option>
        //                     <option value = "json">.json</option>
        //                 </select>,
        //         col_6 : <a href = "url"><u>Preview</u></a>
        //     },
        //     {
        //         col_1 : "Insurance Company Master",
        //         col_2 : <input type = "checkbox" value = "2"/>,
        //         col_3 : <input type = "text" name = "mmm" />,
        //         col_4 : <select name = "insurance_company_master" id = "#">
        //                     <option value = "Master file Selection">Master File Selection</option>
        //                     <option value = "Insurer file Selection">Insurer File Selection</option>
        //                 </select>,
        //         col_5 : <select name = "file type" id ="@">
        //                     <option value = "csv">.csv</option>
        //                     <option value = "xlsx">.xlsx</option>
        //                     <option value = "json">.json</option>
        //                 </select>,
        //         col_6 : <a href = "url"><u>Preview</u></a>
        //     }
        // ]
        

function Nomenclature()  {
    
      return (

           <div>
               <Header/>
               <Container className="container-box">
                <div className = "table_1">
                    <Table style = {{width : "95%"}}>
                        <thead>
                            <tr>
                                <th style = {{fontSize : "0.7rem", paddingLeft : "2%"}}>Giix Standard Masters</th>
                                <th style = {{fontSize : "0.7rem", paddingLeft : "1%"}}>Insurers Master Not Available</th>
                                <th style = {{fontSize : "0.7rem", paddingLeft : "2.5%"}}>Insurer Master Name</th>
                                <th style = {{fontSize : "0.7rem", paddingLeft : "2%"}}>Insurer File Name</th>
                                <th style = {{fontSize : "0.7rem", paddingLeft : "5%"}}>Insurer File Type</th>
                                <th style = {{fontSize : "0.7rem", paddingLeft : "1%"}}>Verification hyperlink</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{paddingLeft : "2%", fontSize : "2vh"}}>Make Model Master</td>
                                <td><input type = "checkbox" value = "2" className = "box"/></td>
                                <td><input type = "text" className = "txt" /></td>
                                <td><Button type = "button" style = {{fontSize: "1.7vh", width: "9vw"}} onClick>Master File Selection</Button></td>
                                <td><input type = "text" style = {{marginLeft : "18%"}}  className = "txtf"/></td>
                                <td><Link className = "view">Preview</Link></td>
                            </tr>

                            <tr>
                                <td style={{paddingLeft : "2%", fontSize : "2vh"}}>City District Master</td>
                                <td><input type = "checkbox" value = "2" className = "check"/></td>
                                <td><input type = "text" className = "txt"/></td>
                                <td><Button type = "button"  style = {{fontSize: "1.7vh", width: "9vw"}} onClick>Master File Selection</Button></td>
                                <td><input type = "text" style = {{marginLeft : "18%"}} className = "txtf"/></td>
                                <td><Link className = "view">Preview</Link></td>
                            </tr>

                            <tr>
                                <td style={{paddingLeft : "2%", fontSize : "2vh"}}>Covers Master</td>
                                <td><input type = "checkbox" value = "2" className = "check"/></td>
                                <td><input type = "text" className = "txt" /></td>
                                <td><Button type = "button" style = {{fontSize: "1.7vh", width: "9vw"}} onClick>Master File Selection</Button></td>
                                <td><input type = "text" style = {{marginLeft : "18%"}} className = "txtf" /></td>
                                <td><Link className = "view">Preview</Link></td>
                            </tr>
                            <tr>
                                <td style={{paddingLeft : "2%", fontSize : "2vh"}}>Pincode Master</td>
                                <td><input type = "checkbox" value = "2" className = "check"/></td>
                                <td><input type = "text" className = "txt" /></td>
                                <td><Button type = "button" style = {{fontSize: "1.7vh", width: "9vw"}} onClick>Master File Selection</Button></td>
                                <td><input type = "text" style = {{marginLeft : "18%"}} className = "txtf" /></td>
                                <td><Link className = "view">Preview</Link></td>
                            </tr>

                            <tr>
                                <td style={{paddingLeft : "2%", fontSize : "2vh"}}>Insurance Company Master</td>
                                <td><input type = "checkbox" value = "2" style = {{paddingLeft : "5%"}}/></td>
                                <td><input type = "text" className = "txt" /></td>
                                <td><Button type = "button" style = {{fontSize: "1.7vh", width: "9vw"}} onClick>Master File Selection</Button></td>
                                <td><input type = "text" style = {{marginLeft : "18%"}} className = "txtf"/></td>
                                <td><Link className = "view">Preview</Link></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className = "table_2">
                    <Table style = {{width : "95%"}}>
                        <thead>
                            <tr>
                                <th style={{fontSize : "0.7rem", paddingLeft : "2%"}}>Insurer Specific Master</th>
                                <th style={{fontSize : "0.7rem", paddingLeft : "3%"}}>Simple Name</th>
                                <th style={{fontSize : "0.7rem", paddingLeft : "3.5%"}}>Description</th>
                                <th style={{fontSize : "0.7rem", paddingLeft : "2%"}}>Insurer File Name</th>
                                <th style={{fontSize : "0.7rem", paddingLeft : "5%"}}>Insurer File Type</th>
                                <th style={{fontSize : "0.7rem", paddingLeft : "1%"}}>Verfication hyperlink</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type = "text" name = "ism" className = "txt" /></td>
                                <td><input type = "text" name = "sm" className="txt"/></td>
                                <td><input type = "text" name = "description" className="txt" /></td>
                                <td><Button type = "button"  style = {{fontSize: "1.7vh", width: "9vw"}} onClick>Master File Selection</Button></td>
                                <td><input type = "text" style = {{marginLeft : "18%"}} className = "txtf"/></td>
                                <td><Link className = "view">Preview</Link></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Row className='navigation-buttons'>
                    <Col><Link to='/mapfile'><button className='btn '>Cancel</button></Link></Col>
                    <Col><Link to='/mapfile'><button className='btn '>Back</button></Link></Col>
                    <Col><Link to='/mapfile'><button className='btn '>Save Draft</button></Link></Col>
                    <Col><Link to='/status'><button className='btn '>Next</button></Link></Col>
                </Row>
                <br/>
                <br/>
            </Container>   
        <Footer/>  
    </div>
    )
}
export default Nomenclature;
