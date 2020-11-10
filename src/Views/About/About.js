
import React from "react";
import "./About.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import bgImage from "../../Images/Giix_1.jpg";

function About() {

    return (
        <div>
            <Header/>
            <div className = "about_img">
                <img className = "abt_img" alt = "intro"  src = {bgImage}/> 
                <h2><span>About us</span></h2>
            </div>

            <Footer/>
        </div>
    )

}
export default About;