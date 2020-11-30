import React, {Component} from 'react'
import {FormControl,Form} from 'react-bootstrap'
import { FormLabel} from '@material-ui/core';
import TextField from "@material-ui/core/TextField"
import axios from "axios";

class Forms extends Component{
    constructor(){
        super()
        this.state={ data: this.componentDidMount}
    }
    
    async componentDidMount(){
        try{
            await axios.get('http://13.229.56.134:1337/buisnessHierarchy')
            .then(res => {
                console.log(res.data.apiResponse.data)
                return res.data.apiResponse.data})
        }
    
        catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({ error });
        }
        
    }
    
    render(){
        return(
            <div>
                <ul>
                    
                    {!this.state.data?this.state.data.map(function(d,i){<li key={i} >{d[i]}</li>},this):""}
                </ul>
            </div>
        )
    }
}

export default Forms

// const submit=async(formdata)=>{
//     try{
//         const data={
//             giixProductCategoryId:formdata.select3,
//             insurerProductName:formdata.insert1,
//             giixTransactionTypeId:formdata.select4,
//             transactionTypeCustomName:formdata.insert2
//         }
//         await  axios.post("http://13.229.56.134:1337/insurerProduct",data).then((res)=>{
//             props.SetTransactionTypeIdFromNP(res.data.apiResponse.data[0].TransactionType.id)
//         }).catch((error)=>{console.log(error)})
//     } 
//     catch(error){
//         console.log("NewProduct.js lineNo.18 error=>"+error)
//     }
// }

// const  fetchData = async() => {
//     try {
//         await axios
//         .get("http://13.229.56.134:1337/buisnessHierarchy")
//         .then(async(res) => {
//             await setData(res.data)
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     } 
//     catch (err) {
//         console.log(err);
//     }
// };