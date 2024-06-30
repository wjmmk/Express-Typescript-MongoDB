import { Request, Response } from 'express';
import { getProductItems } from '../Services/Product.service';
import { error, handleHttp, success } from '../Utils/error.handle';


const getProducts = async (req:Request, res: Response) => {
    try {
        const respUsers = await getProductItems();
        /* res.send({respUsers}); */
        success(res, 'The request was resolved correctly.', respUsers)
    } catch (err) {
        /* handleHttp(res, 'ERROR_GET_USERS'); */
        error(res, 'The request could not be resolved correctly.');
    }
}



export { getProducts }