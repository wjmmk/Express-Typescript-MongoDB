import { Request, Response } from 'express';
import { getProductItem, getProductItems } from '../Services/Product.service';
import { error, handleHttp, success } from '../Utils/error.handle';
import ProductModel from '../Models/Product.model';
import { Product } from '../Interfaces/product.interface';


const getProducts = async (req:Request, res: Response) => {
    try {
        const respProducts = await getProductItems();
        /* res.send({respUsers}); */
        //success(res, 'The request was resolved correctly.', respProducts)
        res.send(respProducts)
    } catch (err) {
        /* handleHttp(res, 'ERROR_GET_USERS'); */
        error(res, 'The request could not be resolved correctly.');
    }
}

const getProduct = async ({params}:Request, res: Response) => {
    try {
        const { id } = params;
        const respItem = await getProductItem(id);
        const data = respItem ? respItem : 'ITEM_USER_NOT_FOUND' 
        res.send(data)
    } catch (err) {
        handleHttp(res, 'ERROR_GET_USER');
    }
}

const postProduct = async (req:Request, res: Response) => {
    try {
        const { name, price, imageUrl }: Product = req.body;
        /* const checkIs = await ProductModel.findOne({email})
        if(checkIs) return 'USER_EXISTS' */
        const registerNewUser = await ProductModel.create({
            name,
            price,
            imageUrl
        })
        res.send({registerNewUser})
       //  success(res, 'The request was resolved correctly.', registerNewUser) 
    } catch (err) {
        handleHttp(res, 'ERROR_POST_USER');
    }
}

export { 
    getProducts, 
    postProduct,
    getProduct
}