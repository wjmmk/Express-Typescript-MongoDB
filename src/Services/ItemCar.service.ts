import { Car } from "../Interfaces/car.interface";
import ItemCarModel from "../Models/ItemCar.model";

const inserCarItem = async (item: Car) => {
    const responseInsert = await ItemCarModel.create(item);
    return responseInsert;
}

const getCarItems = async () => {
    const respItems = await ItemCarModel.find({});
    return respItems;
}

const getCarItem = async (id: string) => {
    const respCarItem = await ItemCarModel.findOne({_id: id})
    return respCarItem;
}

const updateCar = async (id: string, data: Car) => {
    const respCarItem = await ItemCarModel.findOneAndUpdate({_id: id}, data, { new: true })
    return respCarItem;
}

const deleteCar = async (id: string) => {
    const respCarItem = await ItemCarModel.deleteOne({_id:id})
    return respCarItem
}

export { 
    inserCarItem, 
    getCarItems, 
    getCarItem,
    updateCar,
    deleteCar
}