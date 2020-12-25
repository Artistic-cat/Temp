import React from "react"
import "../Setup/Setup.css";

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Functab from "../../Components/NavbarTab/Functab"
import {Container} from "react-bootstrap"
import RecentlyUsed from "../../Components/RecentlyUsed/RecentlyUsed"
import {MdDone} from "react-icons/md";
import {ImUserCheck} from "react-icons/im";


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
        icon: <MdDone className='setup-icons' style={{color: 'white', fontSize: '2.5em'}}/>,
        tabname: "Action Approval Request",
        tabpath: "/admin/adminhome/ActionApproval",
        ahcontent: "Product Setup Approval Bucket",
        ahhcontent: "Block/Unblock Approval Bucket",
    },
    {
        id: 2,
        icon: <ImUserCheck className='setup-icons' style={{color: 'white', fontSize: '2.5em'}}/>,
        tabname: "Approval/Rejection Logs",
        tabpath: "/admin/adminhome/ApproveReject",
        // ahcontent: "Product Setup Approval Bucket",
        // ahhcontent: "Block/Unblock Approval Bucket ",
    },
]


function adminHome() {
    new RecentlyUsed().setPath("Admin", window.location.href)
    const tabsComponent = tabs.map(tab => <Functab id={tab.id} tabname={tab.tabname}
                                                      ahcontent={tab.ahcontent} ahhcontent={tab.ahhcontent}
                                                      tabpath={tab.tabpath} icon={tab.icon}/>)
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

export default adminHome;