import React from 'react'
import { Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"
import './Functionality.css'

function InnerFunctionBody(props){
    return(
        <div className='inner-body-content'>
            {`${props.content}`}
        </div>
    )
}

function FunctionBody(props){
    const content=props.content
    const npcontent=props.npcontent
    const nttcontent=props.nttcontent
    const drafts=props.drafts
    const tabpath=props.tabpath
    return(
        <div className='content-area'>
            <div className='content-tabs'>
                <div className='content-links'>
                    <Link to={`${props.tabpath}`+'/NewProduct'} className='second-tabs'>New Product</Link>
                    <Link to={`${props.tabpath}`+'/NewTransactionType'} className='second-tabs'>New Transaction Type</Link>
                    <Link to={`${props.tabpath}`+'/Drafts'} className='second-tabs'>Drafts</Link>
                </div>
                <Switch>
                    <Route path={`${props.tabpath}`+'/NewProduct'} render={(props) =><InnerFunctionBody content={npcontent} />}/>
                    <Route path={`${props.tabpath}`+'/NewTransactionType'} render={(props) =><InnerFunctionBody content={nttcontent} />}/>
                    <Route path={`${props.tabpath}`+'/Drafts'} render={(props) =><InnerFunctionBody content={drafts} />}/>
                </Switch>
            </div>

            {/* <div className='content-text'>
                <h5>{`${props.content}`}</h5>
                <h5>{`${props.npcontent}`}</h5>
                <h5>{`${props.nttcontent}`}</h5>
                <h5>{`${props.drafts}`}</h5>
                <h5>{`${props.tabpath}`+'/NewProduct'}</h5>
            </div> */}
        </div>
    )
}
// npcontent=props.npcontent nttcontent=props. drafts=props.
function Functionality(props){
    const content=props.content
    const npcontent=props.npcontent
    const nttcontent=props.nttcontent
    const drafts=props.drafts
    const tabpath=props.tabpath
    return(      
        <div className='functionality'>
            <Link to={`${props.tabpath}`} className="link" >
                <div className='circle'></div>
                <div className='text'>{`${props.tabname}`}</div>
            </Link>
            <Switch>
                <Route path={`${props.tabpath}`} render={(props) => 
                <FunctionBody tabpath={tabpath} content={content} npcontent={npcontent} nttcontent={nttcontent} drafts={drafts} />} />
            </Switch>
        </div>
    )
}

export default Functionality