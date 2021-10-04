import React from 'react';

import useStyles from './styles';

const Product = () => {
    const classes = useStyles();
    
    return (
        <h1 className={classes}>Product</h1>
    );
}

export default Product;