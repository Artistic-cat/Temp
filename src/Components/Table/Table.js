import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Table.css'

class Tables extends Component{
    constructor(props){
        super(props)
        this.header=props.header
        this.data=props.data
    }
    render(){
        
        return(
            <div>
                {/* striped hover bordered  */}
                <Table size="sm" borderless> 
                    <thead >
                        <tr>
                            {this.header.map((x,i)=>
                                <th key={i}>{x.name}</th>
                            )} 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.data.map((x,i)=>{
                                return x.type?
                                <td key={i}>{x.name}</td>
                                :
                                <Link to={x.link} style={{textDecoration: 'none'}}><td> {x.name} </td></Link>
                            })}
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Tables