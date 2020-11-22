import React from "react"
import "./Setup.css"

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar"
import FuncNavtab from "../../Components/NavTab/FuncNavtab"
import {Container} from "react-bootstrap"
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed"
import {AiOutlineDeploymentUnit, AiOutlineSnippets} from "react-icons/ai";
import {
    GrGraphQl,
} from "react-icons/all";

//To do:
//Pass icons as components
//Dropdown options for API Driven

const tabs = [
    {
        id: 1,
        icon: <GrGraphQl className='setup-icons' style={{color: 'white', fontSize: '2.5em'}}/>,
        tabname: "Api Driven",
        tabpath: "/setup/ApiDriven",
        content: "For API Driven",
        npcontent: "API Driven NP",
        nttcontent: "API Driven NTT",
        drafts: "API Driven Drafts",
    },
    {
        id: 2,
        icon: <AiOutlineDeploymentUnit className='setup-icons' style={{color: 'white', fontSize: '2.5em'}}/>,
        tabname: "GiiX Managed",
        tabpath: "/setup/GiiXManaged",
        content: "For GiiX Managed",
        npcontent: "GiiX Managed NP",
        nttcontent: "GiiX Managed NTT",
        drafts: "GiiX Managed Drafts"
    },
    {
        id: 3,
        icon: <AiOutlineSnippets className='setup-icons' style={{color: 'white', fontSize: '2.5em'}}/>,
        tabname: "Insurer Managed",
        tabpath: "/setup/InsurerManaged",
        content: "For Insurer Managed",
        npcontent: "Insurer Managed NP",
        nttcontent: "Insurer Managed NTT",
        drafts: "Insurer Managed Drafts"
    },
]


function Setup() {
    new RecentlyUsed().setPath("Setup", window.location.href)
    const tabsComponent = tabs.map(tab => <FuncNavtab id={tab.id} tabname={tab.tabname} content={tab.content}
                                                      npcontent={tab.npcontent} nttcontent={tab.nttcontent}
                                                      drafts={tab.drafts} tabpath={tab.tabpath} icon={tab.icon}/>)
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
            <Footer/>
        </div>
    )
}

export default Setup