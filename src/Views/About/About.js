import React from "react";
import "./About.css";

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Container , Card} from "react-bootstrap";
import cImage from "../../Images/Giix_1.jpg";
import sImage from "../../Images/download.jpg";
import aImage from "../../Images/emoji.jpg";

function About() {

    return (

        <div>
            <Sidebar />
            <Header />
            <Container>

                <div class = "container-fluid">
                    <img className = "img1" src = {cImage} alt = "company" />
                    <h2 style = {{fontSize:"8vh", fontFamily : "Roboto"}}>About Giix</h2>
                </div> 

                <div className = "content">
                    <p>CloudBanyan Technologies is a FinTech Startup founded in India and it got registered as a Private <br/> Limited Company in November 2019. The vision & mission of the organization;
                        Uniqueness of the<br/> concept; Exponential growth potential in an untapped global market; Use of cutting edge technol<br/>-ogies like AL, ML, Cloud , CICD to name a few; Complexity 
                        and enormity of the challenge being<br/> addressed; An amazing product market fit; Along with the founders background, track record & <br/>domain expertise contributed to the 
                        organization's initial success in securing sufficient funding in <br/>the form of FDI by a London Based Entrepreneur turned investor . Fortunately, our investor is tec<br/>-hie himself
                        who understands exactly what we are doing and his rich experience in not just creating <br/>successful ventures in the past but also in running them makes him an excellent mentor 
                        which in<br/> many ways give us an edge over a variety of early stage start-ups in the FinTech space. <br/><br/>
                        The Founding Team has an ambitious vision of connecting any and every enterprise application acr<br/>-oss the globe via their patent pending Intelligent Cloud Platform-GiixTM.It's 
                        a first of its kind initiative<br/>that the world will wake up to, after its planned launch in the next financial year.<br/><br/>
                        GiiXTM - Global Information Interchange Xchange will be an infintely scalable yet completely reliable,<br/>artificial intelligent cloud based platform, exclusively for exchange 
                        of enterprise data at lightning <br/>speed over a super secure network. And that, irrespective of the geography , industry domain or the <br/>underlying technology of the communicating 
                        applications .<br/><br/>No, no, don't think of it as a parallel internet. Our objective is quite different and much above & beyond<br/> the idea of plain connectivity.


                    </p>
                </div>

                <div className = "card1">
                    <Card style= {{width : "12rem" , borderColor : "#03002C", borderWidth : "6px"}}>
                        <Card.Img variant = "top" src = {sImage} />
                        <Card.Body>
                            <Card.Title style = {{fontWeight: "bold", textAlign : "Center",fontSize : "3vh"}}>Sangeet Gaurav</Card.Title>
                            <Card.Text style = {{fontWeight : "normal", fontSize : "2vh", textAlign : "center"}}>
                                <strong>The CEO & The Founder</strong><br/> Some text by Sangeet
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </div>

                <div className = "card2">
                    <Card style= {{width : "12rem" , borderColor : "#03002C", borderWidth : "6px"}}>
                        <Card.Img variant = "top" src = {aImage} />
                        <Card.Body>
                            <Card.Title style = {{fontWeight: "bold", textAlign : "Center",fontSize : "3vh"}}>Shailesh Prakash</Card.Title>
                            <Card.Text style = {{fontWeight : "normal", fontSize : "2vh", textAlign : "center"}}>
                                <strong>The Technical Architect & The Global CEO</strong><br/> Some text by Shailesh
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </div>

            </Container>
            <Footer />
             
        </div>
    )


}

export default About;