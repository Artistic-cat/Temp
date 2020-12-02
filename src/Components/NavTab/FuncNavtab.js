import React from 'react'
import {NavLink, Route, Switch} from "react-router-dom"
import './FuncNavtab.css'

function InnerFunctionBody(props) {
    return (
        <div className='inner-body-content'>
            {`${props.content}`}
        </div>
    )
}

function FunctionBody(props) {
    // const content=props.content
    const npcontent = props.npcontent
    const nttcontent = props.nttcontent
    const drafts = props.drafts

    return (
        <div className='content-area'>
            <div className='content-tabs'>
                <div className='content-links'>
                    <NavLink to={`${props.tabpath}/NewProduct`} className='second-tabs'
                             activeClassName='active-second-tabs'>New Product</NavLink>
                    <NavLink to={`${props.tabpath}/NewTransactionType`} className='second-tabs'
                             activeClassName='active-second-tabs'>New Transaction Type</NavLink>
                    <NavLink to={`${props.tabpath}/Drafts`} className='second-tabs'
                             activeClassName='active-second-tabs'>Drafts</NavLink>
                </div>
                <Switch>
                    <Route path={`${props.tabpath}/NewProduct`}
                           render={() => <InnerFunctionBody content={npcontent}/>}/>
                    <Route path={`${props.tabpath}/NewTransactionType`}
                           render={() => <InnerFunctionBody content={nttcontent}/>}/>
                    <Route path={`${props.tabpath}/Drafts`}
                           render={() => <InnerFunctionBody content={drafts}/>}/>
                </Switch>
            </div>
        </div>
    )
}

function FuncNavtab(props) {
    const content = props.content
    const npcontent = props.npcontent
    const nttcontent = props.nttcontent
    const drafts = props.drafts
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
                    <FunctionBody tabpath={tabpath} content={content} npcontent={npcontent} nttcontent={nttcontent}
                                  drafts={drafts}/>}/>
            </Switch>
        </div>
    )
}

export default FuncNavtab