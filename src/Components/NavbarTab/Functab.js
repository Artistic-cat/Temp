import React from 'react'
import {Link, NavLink, Route, Switch} from "react-router-dom"

import '../NavTab/FuncNavtab.css';

/*
 * @Author: Sristi
 *
 * Component used in Setup.js (View)
 * 
 */

function AdminFunctionBody(props) {
    return (
        <div className='inner-body-content'>
            {`${props.content}`}

            {/* Remove the code from here */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to='/files'><button className='btn'>Next</button></Link>
            {/* Remove the code till here, it's added just to preview the page flow */}

        </div>
    )
}

function MainBody(props) {
    // const content=props.content
    const ahcontent = props.ahcontent
    const ahhcontent = props.ahhcontent
    return (
        <div className='content-area'>
            <div className='content-tabs'>
                <div className='content-links'>
                    <NavLink to={`${props.tabpath}/ActionApproval`} className='second-tabs'
                             activeClassName='active-second-tabs'>Product Setup Approval Bucket</NavLink>
                    <NavLink to={`${props.tabpath}/ApproveReject`} className='second-tabs'
                             activeClassName='active-second-tabs'>Block/Unblock Approval Bucket</NavLink>
                </div>
                <Switch>
                    <Route path={`${props.tabpath}/ActionApproval`}
                           render={() => <AdminFunctionBody content={ahcontent}/>}/>
                    <Route path={`${props.tabpath}/ApproveReject`}
                           render={() => <AdminFunctionBody content={ahhcontent}/>}/>
                </Switch>
            </div>
        </div>
    )
}

function Functab(props) {
    const ahcontent = props.ahcontent
    const ahhcontent = props.ahhcontent
    const tabpath = props.tabpath
    const icon = props.icon
    return (
        <div className='functionality'>

            <NavLink to={`${props.tabpath}`} className="link" activeClassName='active-tabs'>
                <div className='circle'>{icon}</div>
                <div className='text'>{`${props.tabname}`}</div>
            </NavLink>
            <Switch>
                <Route path={`${props.tabpath}`} render={() =>
                    <MainBody tabpath={tabpath} ahcontent={ahcontent} ahhcontent={ahhcontent}
                                  />}/>
            </Switch>
        </div>
    )
}

export default Functab;