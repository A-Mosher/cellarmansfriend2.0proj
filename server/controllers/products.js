import ProductInfo from "../models/productInfo.js";

export const getProducts = async (req, res) => {
    try {
        const allProducts =  await ProductInfo.find();

        res.status(200).json(allProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    const newProduct = ProductInfo(product)

    try {
        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}