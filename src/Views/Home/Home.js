import React from "react";
import "./Home.css"

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
    return (
        <div>
            <Header/>
            <div className="home" id="home">
                <Sidebar/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;