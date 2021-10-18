/* eslint-disable import/no-anonymous-default-export */
export default (products = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return products.map((product) => product._id === action.payload._id ? action.payload : product);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...products, action.payload];
        default:
            return products;
    }
}