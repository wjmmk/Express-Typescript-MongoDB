import { Request, Response } from 'express';
import { inserCarItem, getCarItems, getCarItem, updateCar, deleteCar } from '../Services/ItemCar.service';
import { handleHttp } from '../Utils/error.handle';


const getItems = async (req:Request, res: Response) => {
    try {
        const respItems = await getCarItems();
        res.send(respItems);
    } catch (err) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const getItem = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const respItem = await getCarItem(id);
        const data = respItem ? respItem : 'ITEM_CAR_NOT_FOUND' 
        res.send(data)
    } catch (err) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const postItem = async (req:Request, res: Response) => {
    try {
        const {body} = req;
        const respItem = await inserCarItem(body)
        res.send(respItem)
    } catch (err) {
        handleHttp(res, 'ERROR_POST_ITEM', err);
    }
}

const updateItem = async ({params, body}:Request, res: Response) => {
    try {
        const { id } = params;
        const respoCarItem =  await updateCar(id, body)
        res.send(respoCarItem)
    } catch (err) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const deleteItem = async ({params}:Request, res: Response) => {
    try {
        const { id } = params;
        const respDeleteItem = await deleteCar(id)
        res.send(respDeleteItem)
    } catch (err) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export {
    getItem,
    getItems,
    postItem,
    updateItem,
    deleteItem
}