import React,{useRef,useEffect,useState} from 'react';
import './NewProduct.css';
import { Formik } from 'formik';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const NewProduct = (props) =>{
  const formikRef=useRef()
  const history = useHistory();
  const [Data, setData] = useState();
  let requiredArray1 ={};
  let requiredArray2 ={};
  let requiredArray3 ={};
  let requiredArray4 ={};
  let arr1=[];
  let arr2=[];
  let arr3=[];
  let arr4=[];

  const dataOFselect1 =()=>{
    requiredArray1= _.groupBy(Data.apiResponse.data,"Vertical") 
    arr1=Object.keys(requiredArray1)
  }

  const setLob=(data)=>{
    formikRef.current.setFieldValue("select2","")
    formikRef.current.setFieldValue("select3","")
    formikRef.current.setFieldValue("select4","")
    formikRef.current.setFieldValue("insert1","")
    formikRef.current.setFieldValue("insert2","")
    requiredArray2=_.groupBy(requiredArray1[data],"LOB")
    arr2=Object.keys(requiredArray2);
  }
  
  const setGPC=(data)=>{
    formikRef.current.setFieldValue("select3","")
    formikRef.current.setFieldValue("select4","")
    formikRef.current.setFieldValue("insert1","")
    formikRef.current.setFieldValue("insert2","")
    requiredArray3=_.groupBy(requiredArray2[data],"ProductCategory")
    arr3=Object.keys(requiredArray3)
  }

  const GSTT= (data,val)=>{
    formikRef.current.setFieldValue("select4","")
    formikRef.current.setFieldValue("insert1","")
    formikRef.current.setFieldValue("insert2","")
    requiredArray4=_.groupBy(requiredArray3[data],"giixTransactionType")
    arr4=Object.keys(requiredArray4)
  }

  const justPrint=(val,value)=>{
    formikRef.current.setFieldValue("insert2","")
  }

  const submit=async(formdata)=>{
    try{
      const data={
        giixProductCategoryId:formdata.select3,
        insurerProductName:formdata.insert1,
        giixTransactionTypeId:formdata.select4,
        transactionTypeCustomName:formdata.insert2
      }
      
      await  axios.post("http://13.229.56.134:1337/insurerProduct",data).then((res)=>{
        props.SetTransactionTypeIdFromNP(res.data.apiResponse.data[0].TransactionType.id)
      }).catch((error)=>{
        console.log(error)
      })

    } catch(error){
      console.log("NewProduct.js lineNo.18 error=>"+error)
    }
    history.push("/Home/Insure-product-wise-Transection-Setup/Setup-of-api-driven-product/New-product/Upload-api-kit");
  }

  const  fetchData = async() => {
    try {
      await axios.get(global.config.backend_ip +"/buisnessHierarchy").then(async(res) => {
        await setData(res.data)
      }).catch((error) => {
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
    }},[Data])

  return(
    <div>
      <Formik initialValues={{select1:'',select2:"",select3:"",insert1:"",select4:"",insert2:"" }} onSubmit={submit} >
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
        return (
          <form onSubmit={handleSubmit}>
            <div style={{marginTop:"15px", width: "100%"}}>
              <Grid container spacing={1} >
                <Grid item xs={12} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                  <TextField
                  style={{backgroundColor:"inherit"}}
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
                    {arr1.map(val => {
                      return(
                        <option key={val} value={val} onClick={()=>setLob(val)}>{val}</option>
                    )})}
                  </TextField>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                  <TextField
                  select
                  name="select2"
                  value={values.select2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Select Line Of Business"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  disabled={values.select1?false:true}
                  >
                    {arr2.map(val => (
                      <option value={val} onClick={()=>setGPC(val)}>{val}</option>
                      ))}
                  </TextField>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                 <Grid item xs={12} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                   <TextField
                   select
                   name="select3"
                   value={values.select3}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   label="Select GiiX Product Category"
                   margin="dense"
                   variant="outlined"
                   disabled={values.select2?false:true}
                   fullWidth
                   >
                     {arr3.map(val => (
                       <option value={requiredArray3[val][0]["ProductCategoryId"]} onClick={()=>GSTT(val,requiredArray3[val][0]["ProductCategoryId"])}>{val}</option>
                       ))}
                  </TextField>
                </Grid>
              </Grid>
              <Grid container spacing={1} style={{marginTop:"8px"}}>
                <Grid item xs={12} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                  <TextField
                  variant="outlined"
                  fullWidth
                  label="Insurer Product Name"
                  name="insert1"
                  autoComplete="insert1"
                  value={values.insert1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={values.select3?false:true}
                  size="small"
                  inputProps={{
                    maxLength: 100,
                  }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} style={{marginTop:"4px"}}>
                <Grid item xs={12}  style={{paddingRight:"3%",paddingLeft:'4%'}}>
                  <TextField
                  select
                  name="select4"
                  value={values.select4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Select Transaction type"
                  margin="dense"
                  variant="outlined"
                  disabled={values.insert1?false:true}
                  fullWidth
                  >
                    {arr4.map(val => (
                      <option value={requiredArray4[val][0]["giixTransactionTypeId"]} onClick={()=>{justPrint(val,requiredArray4[val][0]["giixTransactionTypeId"])}}>{val}</option>
                      ))}
                  </TextField>
                </Grid>
              </Grid>
              <Grid container spacing={1} style={{marginTop:"8px"}}>
                <Grid item xs={12} style={{paddingRight:"3%",paddingLeft:'4%'}}>
                  <TextField 
                  variant="outlined" 
                  fullWidth 
                  label="Insurer Transaction Type Name"
                  name="insert2" 
                  autoComplete="insert2" 
                  value={values.insert2} 
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  disabled={values.select4?false:true} size="small"
                  inputProps={{
                    maxLength: 100,
                  }}
                  />
                </Grid>
              </Grid>
            </div>
            <br/>
            <button className='btn' buttonType="Submit" disabled={values.insert2?false:true} left="35%" top="3%" > Set up New Product </button>
          </form>
          )}}
        </Formik>
      </div>
    );}
    export default NewProduct;



