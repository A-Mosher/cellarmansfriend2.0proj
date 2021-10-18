import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';

import Product from './Product/Product';

import useStyles from './styles';

const Products = ({ setCurrentId }) => {
    const products = useSelector((state) => state.products);
    const classes = useStyles();

    console.log(products);

    return (
        !products.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {products.map((product) => (
                    <Grid key={product._id} item xs={12} sma={6}>
                        <Product product={product} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Products;