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

const getProductItem = async (id: string) => {
    const respUser = await ProductModel.findOne({_id: id})
    return respUser;
}

export { 
    inserProduct, 
    getProductItems,
    getProductItem
}