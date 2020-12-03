import React, {Component} from 'react'
import axios from "axios";

/*
 * @Author: Sristi
 *
 * Form component used in Setup.js (View)
 * A work in progress...
 * 
 * uses the GET buisnessHierarchy API
 * 
 */

class Forms extends Component{
    async componentDidMount() {
        try {
            await axios.get(global.config.backend_ip
                + "/buisnessHierarchy")
                .then((response) => {
                    this.setState({
                            formsList: response.data.apiResponse.data
                        }
                    )
                })
        } catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({error});
        }
    }
    
    render(){
        return(
            <div>
                <ul>
                    {/* {
                        (this.state != null ?
                            [...this.state.formsList].map((data) =>
                                <tr key={data.key}>
                                    <td>{data.insurerMasterFileName}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Description}</td> 
                                </tr>
                            )
                            : "")
                    } */}
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