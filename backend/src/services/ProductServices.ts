import { Product } from "../models/product.js"
import type { ProductTypes } from "../utils/ProductType.js";
export const createNewNote = async (
  ProductName: string,
  Price: Number,
  Category: string
) => {
  return await Product.create({
   ProductName,
   Price,
   Category

  });
};

export const updateExistingNote = async (
  ProductID:String
) => {
  const note = await Product.findOne({
    ProductID
  });

 


  await n
}