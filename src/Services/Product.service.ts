import { Product } from "../Interfaces/product.interface";
import ProductModel from "../Models/Product.model";

const inserProduct = async (product: Product) => {
    const responseInsert = await ProductModel.create(product);
    return responseInsert;
}

const getProductItems = async () => {
    const respItems = await ProductModel.find({});
    return respItems;
}


export { inserProduct, getProductItems }