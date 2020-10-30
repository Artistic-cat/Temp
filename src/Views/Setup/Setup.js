import React  from "react";
import "./Setup.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Container, Button} from "react-bootstrap"; 



function Setup() {
    return (

        <div>
            <Sidebar />
            <Header />

            <Container>

                <Button type = "button" className = "btn btn-primary btn-circle btn-xl">API Driven</Button>
                <Button type = "button" className = "btn btn-primary btn-circle btn-xl">Giix Managed</Button>
                <Button type = "button" className = "btn btn-primary btn-circle btn-xl">Insurer Managed</Button>
               
                <div className = "rectangle" />

            </Container>

            
  
            <Footer />
        </div>
       
            
    );
}

export default Setup;