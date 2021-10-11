import mongoose from "mongoose";
import ProductInfo from "../models/productInfo.js";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await ProductInfo.find();

    res.status(200).json(allProducts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = ProductInfo(product);

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No product with that id");

  const updatedProduct = await ProductInfo.findByIdAndUpdate(_id, product, {
    new: true,
  });

  res.json(updatedProduct);
};
