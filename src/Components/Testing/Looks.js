import React from "react"
import "./Looks.css"

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar"
// import FuncNavtab from "../../Components/NavTab/FuncNavtab"
import Functionality from './Functionality'
import { Container } from "react-bootstrap"
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed"
import {VscFiles,BsBoundingBox,RiBuildingLine} from 'react-icons'

//To do:
//Pass icons as components
//Dropdown options for API Driven

const tabs = [
    {
        id: 1,
        tabname: "Api Driven",
        tabpath: "/testing/ApiDriven",
        content: "For API Driven",
        npcontent: "API Driven NP",
        nttcontent: "API Driven NTT",
        drafts: "API Driven Drafts", 
    },
    {
        id: 2,
        tabname: "GiiX Managed",
        tabpath: "/testing/GiiXManaged",
        content: "For GiiX Managed",
        npcontent: "GiiX Managed NP",
        nttcontent: "GiiX Managed NTT",
        drafts: "GiiX Managed Drafts"
    },
    {
        id: 3,
        tabname: "Insurer Managed",
        tabpath: "/testing/InsurerManaged",
        content: "For Insurer Managed",
        npcontent: "Insurer Managed NP",
        nttcontent: "Insurer Managed NTT",
        drafts: "Insurer Managed Drafts"
    },
]


function Setup() {
    new RecentlyUsed().setPath("Setup", window.location.href)
    const tabsComponent= tabs.map(tab => <Functionality id={tab.id} tabname={tab.tabname} content={tab.content} npcontent={tab.npcontent} nttcontent={tab.nttcontent} drafts={tab.drafts} tabpath={tab.tabpath} />)
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