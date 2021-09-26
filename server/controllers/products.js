import NewProduct from "../models/newProduct.js";

export const getProducts = async (req, res) => {
    try {
        const newProducts =  await NewProduct.find();

        res.status(200).json(newProducts);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createProduct = (req, res) => {
    const product = req.body;

    const newBeer = newProduct(product)

    try {
        await newBeer.save();

        res.status(201).json(newBeer);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}