import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import './FuncNavtab.css'

function FunctionBody(props){
    return(
        <div className='content-area'>
            <div className='content-text'>
                {`${props.content}`}
                <h3>Fill the form here</h3>
                <Link to='/files'>
                    <h3>Next</h3>
                </Link>
            </div>
        </div>
    )
}

function FuncNavtab(props){
    const content=props.content
    return(      
        <div className='functionality'>
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

export default FuncNavtab