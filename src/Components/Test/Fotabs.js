import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import './Fotabs.css'

function FunctionBody(props){
    return(
        <div className='content-area'>
            <div className='content-text'>
                {`${props.content}`}
            </div>
        </div>
    )
}

function Fotabs(props){
    const content=props.content
    return(      
        <div className='fotab'>
            <Link to={`${props.tabpath}`} className="link" >
                <div className='circle'></div>
                <div className='text'>{`${props.tabname}`}</div>
            </Link>
            <Switch>
                <Route path={`${props.tabpath}`} render={(props) => <FunctionBody content={content} />} />
            </Switch>
        </div>
    )
}

export default Fotabs