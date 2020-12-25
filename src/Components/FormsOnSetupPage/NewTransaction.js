import React,{useRef,useEffect,useState} from 'react';
import './NewProduct.css';
 import { Formik } from 'formik';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import _, { values } from "lodash";
import { useHistory } from "react-router-dom";
import axios from "axios";



 
 const NewTransactionType = (props) =>{
    const formikRef=useRef()
  const history = useHistory();
  const [Data, setData] = useState();
  

    let requiredArray1 ={};
    let requiredArray2 ={};
    let requiredArray3 ={};
    let requiredArray4 ={};
    let requiredArray5 ={};

     let arr1=[];
     let arr2=[];
     let arr3=[];
     let arr4=[];
     let arr5=[];
   

    const dataOFselect1 =()=>{
        requiredArray1= _.groupBy(Data.apiResponse.data,"Vertical") 
       arr1=Object.keys(requiredArray1)
     }
   
     const setLob=(data)=>{
         formikRef.current.setFieldValue("select2","")
         formikRef.current.setFieldValue("select3","")
         formikRef.current.setFieldValue("select4","")
         formikRef.current.setFieldValue("select5","")
         formikRef.current.setFieldValue("insert1","")

       requiredArray2=_.groupBy(requiredArray1[data],"LOB")
         arr2=Object.keys(requiredArray2);
     }
     const setGPC=(data)=>{
        formikRef.current.setFieldValue("select3","")
        formikRef.current.setFieldValue("select4","")
        formikRef.current.setFieldValue("select5","")
        formikRef.current.setFieldValue("insert1","")

       requiredArray3=_.groupBy(requiredArray2[data],"ProductCategory")
       arr3=Object.keys(requiredArray3)


     }
     const setASIP =(data,val)=>{
        formikRef.current.setFieldValue("select4","")
        formikRef.current.setFieldValue("select5","")
        formikRef.current.setFieldValue("insert1","")

         requiredArray4 = _.groupBy(requiredArray3[data],"insurerProductName")
        arr4=Object.keys(requiredArray4)


     }
     const GSTT= (data,val)=>{
        formikRef.current.setFieldValue("select5","")
        formikRef.current.setFieldValue("insert1","")
        requiredArray5=_.groupBy(requiredArray4[data],"giixTransactionType")
        arr5=Object.keys(requiredArray5)
     }
   
     const justPrint=(val,value)=>{
      formikRef.current.setFieldValue("insert1","")
     }

     const submit=async(formdata)=>{
       try{
         const data={
          giixProductCategoryId:formdata.select3,
          insurerProductId:formdata.select4,
          giixTransactionTypeId:formdata.select5,
          transactionTypeCustomName:formdata.insert1
         }
         await  axios.post("http://13.229.56.134:1337/insurerTransactionType",data).then((res)=>{
          console.log(res);
          props.SetTransactionTypeIdFromNTP(res.data.apiResponse.data[0].id)
        }).catch((error)=>{
          console.log(error)
        })

       } catch(error){
         console.log("NewProduct.js lineNo.18 error=>"+error)
       }
       history.push("/Home/Insure-product-wise-Transection-Setup/Setup-of-api-driven-product/New-transaction-type/Upload-api-kit");


     }



   const  fetchData = () => {
      try {
        axios
          .get("http://13.229.56.134:1337/buisnessHierarchyInsurer")
          .then((res) =>{
            console.log(res.data)
            setData(res.data);
          } )
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      fetchData();
       }, []);

       useEffect(()=>{
        if(Data!==undefined){
         dataOFselect1()
        }
       console.log(Data)
     },[Data])

    
    return(
   <div>
     <Formik
       initialValues={{select1:'',select2:"",select3:"",select4:"",select5:"",insert1:"" }}
       onSubmit={submit}
     >
       {(formikProps)=>{
           const {
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         setFieldValue
           }=formikProps
           formikRef.current=formikProps
         /* and other goodies */
        return (
         <form onSubmit={handleSubmit}>
             <div style={{marginTop:"15px"}}>
                 <Grid container spacing={1}>
                     <Grid item  xs={12} sm={12} md={3} lg={3} xl={3}>
             <text style={{marginTop:"1%",marginLeft:"10px",float:"left"}}>Insurance Vertical</text>
                     </Grid>
                     <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                     <TextField
             select
             name="select1"
                value={values.select1}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Select Insurance Vertical"  
                margin="dense"
                variant="outlined"
                fullWidth
              >
                {arr1.map(val => (
                 <option value={val} onClick={()=>{setLob(val)}}>{val}</option>
                ))}
              </TextField>
                     </Grid>

                 </Grid>
                 <Grid container spacing={1}>
                     <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
             <text style={{marginTop:"1%",marginLeft:"10px",float:"left"}}>Line Of Business</text>
                     </Grid>
                     <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                     <TextField
             select
             name="select2"
                value={values.select2}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Select LOB"  
                margin="dense"
                variant="outlined"
                fullWidth
                disabled={values.select1?false:true}
              >
                {arr2.map(val => (
                 <option value={val} onClick={()=>{setGPC(val)}}>{val}</option>
                ))}
              </TextField>
                     </Grid>

                 </Grid>
                 <Grid container spacing={1}>
                     <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
             <text style={{marginTop:"1%",marginLeft:"10px",float:"left"}}>GiiX Product Category</text>
                     </Grid>
                     <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                     <TextField
             select
             name="select3"
                value={values.select3}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Select Product Category"  
                margin="dense"
                variant="outlined"
                disabled={values.select2?false:true}
                fullWidth
              >
                {arr3.map(val => (
                 <option value={requiredArray3[val][0]["ProductCategoryId"]} onClick={()=>{setASIP(val,requiredArray3[val][0]["ProductCategoryId"])}} >{val}</option>
                ))}
              </TextField>
                     </Grid>

                 </Grid>
                 <Grid container spacing={1}>
                     <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
             <text style={{marginTop:"1%",marginLeft:"10px",float:"left"}}>Already set up insurance products</text>
                     </Grid>
                     <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                     <TextField
             select
             name="select4"
                value={values.select4}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Select Insurer Product Name"  
                margin="dense"
                variant="outlined"
                fullWidth
                disabled={values.select3?false:true}
              >
                {arr4.map(val => (
                 <option value={requiredArray4[val][0]["insurerProductId"]} onClick={()=>{GSTT(val,requiredArray4[val][0]["insurerProductId"])}}>{val}</option>
                ))}
              </TextField>
                     </Grid>

                 </Grid>
                 <Grid container spacing={1}>
                     <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
             <text style={{marginTop:"1%",marginLeft:"10px",float:"left"}}>GiiX supported Transaction types</text>
                     </Grid>
                     <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                     <TextField
             select
             name="select5"
                value={values.select5}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Select Transaction type"  
                margin="dense"
                variant="outlined"
                disabled={values.select4?false:true}
                fullWidth
              >
                {arr5.map(val => (
                 <option value={requiredArray5[val][0]["giixTransactionTypeId"]} onClick={()=>{justPrint(val,requiredArray5[val][0]["giixTransactionTypeId"])}}>{val}</option>
                ))}
              </TextField>
                     </Grid>

                 </Grid>
                 <Grid container spacing={1} style={{marginTop:"8px"}}>
                     <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
             <text style={{marginTop:"1%",marginLeft:"10px",float:"left"}}>Insurer Transactions type name</text>
                     </Grid>
                     <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                     <TextField
                      variant="outlined"
                      fullWidth
                      label="e.g. New Business"
                      name="insert1"
                      autoComplete="insert1"
                      value={values.insert1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={values.select5?false:true}
                      size="small"
                      inputProps={{
                        maxLength: 100,
                      }}
                    />
                     </Grid>

                 </Grid>
             </div>
            <button 
                buttonType="Submit"
                disabled={values.insert1?false:true}
                left="35%"
                top="3%"
            >Set up New Transactions Type</button>
         </form>
       )}}
     </Formik>
   </div>
                    
 );}

 export default NewTransactionType;