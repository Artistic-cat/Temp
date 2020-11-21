
import React from "react";
import "./About.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bgImage from "../../Images/Giix_1.jpg";
import dpImage from "../../Images/download.jpg";
import fImage from "../../Images/emoji.jpg";
import { Container } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/Sidebar";




function About() {

    return (
        <div>
            <Header/>
            <Sidebar/>
            <Container>
                <div >
                    <Row>
                        <Col>
                            <img className = "abt_img" alt = "intro"  src = {bgImage}/> 
                            <h2><span style = {{fontSize:'8vh'}}>About us</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className = "content">

                                <p id = "main-content">CloudBanyan Technologies is a FinTech Startup founded in India and it got registered as a 
                                        Private Limited Company in November 2019. The vision & mission of the organization; 
                                        Uniqueness of the concept; Exponential growth potential in an untapped global market; 
                                        Use of cutting edge technologies like AI, ML, Cloud, CICD to name a few; Complexity & enormity 
                                        of the challenge being addressed; An amazing product market fit; Along with the Founders 
                                        background, track record & domain expertise contributed to the organization's initial 
                                        success in securing sufficient funding in the form of FDI (Foreign Direct Investment) by a 
                                        London based Entrepreneur turned Investor. Fortunately, our investor is a Techie himself 
                                        who understands exactly what we are doing and his rich experience in not just creating 
                                        successful ventures in the past but also in running them makes him an excellent mentor 
                                        which in many ways give us an edge over a variety of early stage start-ups in the FinTech 
                                        space.<br/><br/>
                                        The Founding Team has an ambitious vision of connecting any and every enterprise 
                                        application across the globe via their patent pending Intelligent Cloud Platform -
                                        GiiXTM. It's a first of its kind initiative that the world will wake up to, after its 
                                        planned launch in the next financial year.<br/><br/>

                                        GiiXTM - Global information interchange Xchange will be an infinitely scalable yet 
                                        completely reliable, artificially intelligent cloud based platform, exclusively for exchange 
                                        of enterprise data at lightning speed over a super secure network. And that, irrespective of 
                                        the geography, industry, domain or the underlying technology of the communicating applications.<br/><br/>

                                        No, no, don't think of it as a parallel internet. Our objective is quite different and much 
                                        above and beyond the idea of plain connectivity.
                                </p>
                            </div> 
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <div >
                                <img className = "img_1" alt = "san" src = {dpImage} />
                            </div>  
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div >
                                <img className = "img_2"  alt = "tan" src = {fImage} />
                            </div>
                        </Col>
                    </Row>
                </div >
            </Container>                    
            <Footer/>
        </div>
        );
    }

    export default About;
