import React from "react"
import "./Setup.css"

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar"
import FuncNavtab from "../../Components/NavTab/FuncNavtab"
import { Container } from "react-bootstrap"
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed"
// import {VscFiles,BsBoundingBox,RiBuildingLine} from 'react-icons'

//To do:
//Pass icons as components
//Dropdown options for API Driven

const tabs = [
    {
        id: 1,
        tabname: "API Driven",
        tabpath: "/setup/APIDriven",
        content: "For API Driven"
    },
    {
        id: 2,
        tabname: "GiiX Managed",
        tabpath: "/setup/GiiXManaged",
        content: "For GiiX Managed"
    },
    {
        id: 3,
        tabname: "Insurer Managed",
        tabpath: "/setup/InsurerManaged",
        content: "For Insurer Managed",
    },
]

function Setup() {
    new RecentlyUsed().setPath("Setup", window.location.href)
    const tabsComponent= tabs.map(tab => <FuncNavtab id={tab.id} tabname={tab.tabname} content={tab.content} tabpath={tab.tabpath} />)
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Container>
                <div className='overall'>
                    <div className='tabs'>
                        {tabsComponent}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
export default Setup