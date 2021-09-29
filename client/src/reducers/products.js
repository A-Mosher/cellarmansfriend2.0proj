const reducer = (products = [], action) => {
    if(action.type === 'CREATE') {
        switch (action.type) {
            case 'FETCH_ALL':
                return products;
            case 'CREATE':
                return products;
            default:
                return products;
        } 
    }
}