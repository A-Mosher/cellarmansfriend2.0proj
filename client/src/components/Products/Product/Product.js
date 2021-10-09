import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from 'material-ui/icons/ThumbUpAlt';

import useStyles from './styles';

const Product = () => {
    const classes = useStyles();
    
    return (
        <h1 className={classes}>Product</h1>
    );
}

export default Product;