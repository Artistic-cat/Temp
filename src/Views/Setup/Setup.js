import React from "react"
import "./Setup.css"
import NewProductApi from "../../Components/FormsOnSetupPage/NewProduct";
import NewTransactionApi from "../../Components/FormsOnSetupPage/NewTransaction"; 
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar"
import FuncNavtab from "../../Components/NavTab/FuncNavtab"
import { Container } from "react-bootstrap"
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed"
import { AiOutlineDeploymentUnit, AiOutlineSnippets } from "react-icons/ai";
import { GrGraphQl } from "react-icons/all";

/*
 * @Author: Sristi
 *
 * Setup Page
 * This view uses the FuncNavTab component under the NavTab folder in Components
 * The cascading forms need to be passed as a component below (The same way icons are passed)
 * Replace the component with "API Driven NP" in npcontent: "API Driven NP" and so..
 * 
 */

const tabs = [
    {
        id: 1,
        icon: <GrGraphQl className='setup-icons' style={{ color: 'white', fontSize: '2.5em' }} />,
        tabname: "Api Driven",
        tabpath: "/setup/ApiDriven",
        npcontent: NewProductApi,
        nttcontent: NewTransactionApi,
        drafts: "API Driven Drafts",
    },
    {
        id: 2,
        icon: <AiOutlineDeploymentUnit className='setup-icons' style={{ color: 'white', fontSize: '2.5em' }} />,
        tabname: "GiiX Managed",
        tabpath: "/setup/GiiXManaged",
        npcontent: "GiiX Managed NP",
        nttcontent: "GiiX Managed NTT",
        drafts: "GiiX Managed Drafts"
    },
    {
        id: 3,
        icon: <AiOutlineSnippets className='setup-icons' style={{ color: 'white', fontSize: '2.5em' }} />,
        tabname: "Insurer Managed",
        tabpath: "/setup/InsurerManaged",
        npcontent: "Insurer Managed NP",
        nttcontent: "Insurer Managed NTT",
        drafts: "Insurer Managed Drafts"
    },
]


function Setup() {
    new RecentlyUsed().setPath("Setup", window.location.href)
    const tabsComponent = tabs.map(tab => <FuncNavtab id={tab.id} tabname={tab.tabname}
        npcontent={tab.npcontent} nttcontent={tab.nttcontent}
        drafts={tab.drafts} tabpath={tab.tabpath} icon={tab.icon} />)
    return (
        <div>

            <Header />
            <Sidebar />
            <Container>
                <div className='overall'>
                    <div className='tabs'>
                        {tabsComponent}
                    </div>
                </div>
            </Container>
            <br/>
            <Footer /> 
        </div>
    )
}

export default Setup