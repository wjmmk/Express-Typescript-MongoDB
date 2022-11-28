import { User } from "../Interfaces/user.interface";
import UserModel from "../Models/User.model";

const inserUser = async (user: User) => {
    const responseInsert = await UserModel.create(user);
    return responseInsert;
}

const getUserItems = async () => {
    const respItems = await UserModel.find({});
    return respItems;
}

const getUserItem = async (id: string) => {
    const respUser = await UserModel.findOne({_id: id})
    return respUser;
}

const updateUserItem = async (id: string, data: User) => {
    const respUserItem = await UserModel.findOneAndUpdate({_id: id}, data, { new: true })
    return respUserItem;
}

const deleteUserItem = async (id: string) => {
    const respUserItem = await UserModel.deleteOne({_id:id})
    return respUserItem
}

export { inserUser, getUserItems, getUserItem, updateUserItem, deleteUserItem }