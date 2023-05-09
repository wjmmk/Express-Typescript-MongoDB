import { Request, Response } from 'express';
import { inserUser, getUserItems, getUserItem, updateUserItem, deleteUserItem } from '../Services/User.service';
import { handleHttp } from '../Utils/error.handle';
import UserModel from '../Models/User.model';
import { encrypt } from '../Utils/bcrypt.handle';
import { User } from '../Interfaces/user.interface';


const getUsers = async (req:Request, res: Response) => {
    try {
        const respUsers = await getUserItems();
        res.send({respUsers});
    } catch (err) {
        handleHttp(res, 'ERROR_GET_USERS');
    }
}

const getUser = async ({params}:Request, res: Response) => {
    try {
        const { id } = params;
        const respItem = await getUserItem(id);
        const data = respItem ? respItem : 'ITEM_USER_NOT_FOUND' 
        res.send(data)
    } catch (err) {
        handleHttp(res, 'ERROR_GET_USER');
    }
}

const postUser = async (req:Request, res: Response) => {
    try {
        const {email, password, name, age, ocupacion, phone, rol}: User = req.body;
        const checkIs = await UserModel.findOne({email})
        if(checkIs) return 'USER_EXISTS'
        const passwordHash = await encrypt(password)
        const registerNewUser = await UserModel.create({
            email,
            password: passwordHash,
            name,
            age,
            ocupacion,
            phone,
            rol
        })
        res.send({registerNewUser})
    } catch (err) {
        handleHttp(res, 'ERROR_POST_USER');
    }
}

const updateUser = async ({params, body}:Request, res: Response) => {
    try {
        const { id } = params;
        const respoUserItem =  await updateUserItem(id, body)
        res.send(respoUserItem)
    } catch (err) {
        handleHttp(res, 'ERROR_UPDATE_USER');
    }
}

const deleteUser = async ({params}:Request, res: Response) => {
    try {
        const { id } = params;
        const respDeleteUser = await deleteUserItem(id)
        res.send(respDeleteUser)
    } catch (err) {
        handleHttp(res, 'ERROR_DELETE_USER');
    }
}

export {
    getUser,
    getUsers,
    postUser,
    updateUser,
    deleteUser
}