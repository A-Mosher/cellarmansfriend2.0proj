import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector  } from 'react-redux';

import useStyles from './styles';
import { createProduct, updateProduct } from '../../actions/products';

const Form = ({ currentId, setCurrentId}) => {
    const [productData, setProductData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
    const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(product) setProductData(product);
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateProduct(currentId, productData));
        } else {
            dispatch(createProduct(productData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setProductData({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a New Beer</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={productData.creator} onChange={(e) => setProductData({ ...productData, creator: e.target.value })} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
            <TextField name="message" variant="outlined" label="Message" fullWidth value={productData.message} onChange={(e) => setProductData({ ...productData, message: e.target.value })} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={productData.tags} onChange={(e) => setProductData({ ...productData, tags: e.target.value })} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setProductData({ ...productData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;