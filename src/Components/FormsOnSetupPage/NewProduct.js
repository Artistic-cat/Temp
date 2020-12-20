/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import axios from "axios";
import { Fab } from '@material-ui/core';
import './NewProduct.css';


const NewProduct = (props) => {
    const history = useHistory();
    const [Data, setData] = useState();
    const [values, setState] = useState({
        select1: {},
        select2: {},
        select3: {},
        select4: {},
        insert1: "",
        insert2: ""
    });

    const [options, setOptions] = useState({
        arr1: [],
        arr2: [],
        arr3: [],
        arr4: []
    });

    /*
        Always Remember whenever you are setting state:
        Do it like this because ypu don't want to lose previous selected data => {
            setState({...values, select1: data })
            only write seperately whichever object you want to change here i am changing select1
        }
     */

    let requiredArray1 = {};
    const requiredArray2 = {};
    const requiredArray3 = {};
    const requiredArray4 = {};

    const dataOFselect1 = () => {
        requiredArray1 = _.groupBy(Data.apiResponse.data, "Vertical");
        const array = Object.keys(requiredArray1);
        setOptions({ ...options, arr1: array });
    };

    const fetchData = async () => {
        try {
            await axios
                .get("http://13.229.56.134:1337/buisnessHierarchy")
                .then(async (res) => {
                    await setData(res.data);
                })
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

    useEffect(() => {
        if (Data !== undefined) {
            dataOFselect1();
        }
    }, [Data]);

    const handleSubmit = async (formdata) => {
        try {
            const data = {
                giixProductCategoryId: formdata.select3,
                insurerProductName: formdata.insert1,
                giixTransactionTypeId: formdata.select4,
                transactionTypeCustomName: formdata.insert2
            };

            await axios.post("http://13.229.56.134:1337/insurerProduct", data)
                .then((res) => {
                    props.SetTransactionTypeIdFromNP(res.data.apiResponse.data[0].TransactionType.id);

                }).catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.log(`NewProduct.js lineNo.18 error=>${error}`);
        }
        history.push("/Home/Insure-product-wise-Transection-Setup/Setup-of-api-driven-product/New-product/Upload-api-kit");
    };

    const handleChange = (event, type) => {
        if (type === "select1") {
            // call API and update select1
        }
        else if (type === "select2") {
            // call API and update select2
        }
        else if (type === "select3") {
            // update select3
        } else {
            // update select4
        }
    };

    const handleTextChange = (event, type) => {
        if (type === "insert1") {
            // update insert1 state
        } else {
            // update insert2 state
        }
    };

    const setLob = (data) => {
        /*
            setLOB Data and after setting LOB
            data set Array 2 data don't forget to set by setting state
            e.g.: setState({ })

            they are doing something Like this i don't know what going on Inside
                But Exact Converted Code of This Will Be =>
                requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                arr2 = Object.keys(requiredArray2);

                New Code With SetState => {
                    requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                    const array = Object.keys(requiredArray2);
                    setOptions({ ...options, arr2: array });
                }
        */
    };

    const setGPC = (data) => {
        /*
                setGPC Data and after setting GPC
                data set Array 2 data don't forget to set by setting state
                e.g.: setState({ })

                they are doing something Like this i don't know what going on Inside
                But Exact Converted Code of This Will Be =>
                requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                arr2 = Object.keys(requiredArray2);

                New Code With SetState => {
                    requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                    const array = Object.keys(requiredArray2);
                    setOptions({ ...options, arr2: array });
                }
        */
    };

    const GSTT = (data) => {
        /*
                setGSTT Data and after setting GSTT
                data set Array 2 data don't forget to set by setting state
                e.g.: setState({ })

                they are doing something Like this i don't know what going on Inside
                But Exact Converted Code of This Will Be =>
                requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                arr2 = Object.keys(requiredArray2);

                New Code With SetState => {
                    requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                    const array = Object.keys(requiredArray2);
                    setOptions({ ...options, arr2: array });
                }

        */
    };

    const justPrint = () => {
        /*
               setjustPrint Data and after setting justPrint
               data set Array 2 data don't forget to set by setting state
               e.g.: setState({ })

               they are doing something Like this i don't know what going on Inside
                But Exact Converted Code of This Will Be =>
                requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                arr2 = Object.keys(requiredArray2);

                New Code With SetState => {
                    requiredArray2 = _.groupBy(requiredArray1[data], "LOB")
                    const array = Object.keys(requiredArray2);
                    setOptions({ ...options, arr2: array });
                }
       */
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: "15px" }}>
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <text style={{ marginTop: "1%", marginLeft: "10px", float: "left" }}>Insurance Vertical</text>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{ paddingRight: "3%", paddingLeft: '4%' }}>
                            <TextField
                                style={{ backgroundColor: "inherit" }}
                                select
                                name="select1"
                                value={values.select1}
                                onChange={(event) => handleChange(event, "select1")}
                                label="Select Insurance Vertical"
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            >
                                {options.arr1.map(val => {
                                    return (
                                        <option key={val} value={val} onClick={() => setLob(val)}>{val}</option>
                                    );
                                })}
                            </TextField>

                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <text style={{ marginTop: "1%", marginLeft: "10px", float: "left" }}>Line Of Business</text>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{ paddingRight: "3%", paddingLeft: '4%' }}>
                            <TextField
                                select
                                name="select2"
                                value={values.select2}
                                onChange={(event) => handleChange(event, "select1")}
                                label="Select LOB"
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                disabled={!values.select1}
                            >
                                {options.arr2.map(val => (
                                    <option value={val} onClick={() => setGPC(val)}>{val}</option>
                                ))}
                            </TextField>

                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <text style={{ marginTop: "1%", marginLeft: "10px", float: "left" }}>GiiX Product Category</text>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{ paddingRight: "3%", paddingLeft: '4%' }}>
                            <TextField
                                select
                                name="select3"
                                value={values.select3}
                                onChange={(event) => handleChange(event, "select1")}
                                label="Select Product Category"
                                margin="dense"
                                variant="outlined"
                                disabled={!values.select2}
                                fullWidth
                            >
                                {options.arr3.map(val => (
                                    <option value={requiredArray3[val][0].ProductCategoryId} onClick={() => GSTT(val, requiredArray3[val][0].ProductCategoryId)}>{val}</option>
                                ))}
                            </TextField>

                        </Grid>
                    </Grid>
                    <Grid container spacing={1} style={{ marginTop: "8px" }}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <text style={{ marginTop: "-1%", marginLeft: "10px", float: "left" }}>Insurer Product Name</text>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{ paddingRight: "3%", paddingLeft: '4%' }}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="e.g. Package Policy"
                                name="insert1"
                                autoComplete="insert1"
                                value={values.insert1}
                                onChange={(event) => handleTextChange(event, "insert1")}
                                disabled={!values.select3}
                                size="small"
                                inputProps={{
                                    maxLength: 100,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} style={{ marginTop: "4px" }}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <text style={{ marginTop: "1%", marginLeft: "10px", float: "left" }}>GiiX supported Transaction types</text>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{ paddingRight: "3%", paddingLeft: '4%' }}>
                            <TextField
                                select
                                name="select4"
                                value={values.select4}
                                onChange={(event) => handleChange(event, "select1")}
                                label="Select Transaction type"
                                margin="dense"
                                variant="outlined"
                                disabled={!values.insert1}
                                fullWidth
                            >
                                {options.arr4.map(val => (
                                    <option value={requiredArray4[val][0].giixTransactionTypeId} onClick={() => { justPrint(val, requiredArray4[val][0].giixTransactionTypeId); }}>{val}</option>
                                ))}
                            </TextField>

                        </Grid>
                    </Grid>
                    <Grid container spacing={1} style={{ marginTop: "8px" }}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <text style={{ marginTop: "1%", marginLeft: "10px", float: "left" }}>Insurer Transaction type name</text>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={6} style={{ paddingRight: "3%", paddingLeft: '4%' }}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="e.g. New Business"
                                name="insert2"
                                autoComplete="insert2"
                                value={values.insert2}
                                onChange={(event) => handleTextChange(event, "insert2")}
                                disabled={!values.select4}
                                size="small"
                                inputProps={{
                                    maxLength: 100,
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
                <Fab
                    buttonType="Submit"
                    disabled={!values.insert2}
                    left="35%"
                    top="3%"
                >
                    Set up New Product
           </Fab>
            </form>
        </>
    );
};

export default connect()(NewProduct);