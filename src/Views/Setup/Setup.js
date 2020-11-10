import React  from "react";
import "./Setup.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Container, Button} from "react-bootstrap"; 
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Setup() { 
        return (

            <div>
            <Sidebar />
            <Header />

            <Container>
                <Row className = "home-nav-buttons">
                    <Col>
                        <Button type = "button" className = "btn btn-primary btn-circle btn-xl" onClick >
                           API Driven
                         </Button>
                    </Col>

                    <Col>
                        <Button type = "button" className = "btn btn-primary btn-circle btn-xl" onClick >
                            Giix Managed
                        </Button>    
                    </Col>

                    <Col>
                        <Button type = "button" className = "btn btn-primary btn-circle btn-xl" onClick  >
                            Insurer Managed
                        </Button>
                    </Col>

                </Row>

                <Row>
                    <Col>
                       <div className = "API-rectangle">
                           <h5 style = {{textAlign:"center"}}>API Driven Form</h5>
                       </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                       <div className = "Giix-rectangle">
                           <h5 style = {{textAlign:"center"}}>Giix Managed Form</h5>
                       </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                       <div className = "Insurer-rectangle">
                           <h5 style = {{textAlign:"center"}}>Insurer Managed Form</h5>
                       </div>
                    </Col>
                </Row>

            </Container>

             <Footer />
        </div>
        );
    }

export default Setup;
            
    
        

        


    

        


