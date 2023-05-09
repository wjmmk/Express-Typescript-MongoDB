import ItemModel from '../Models/Item.model';

const getOrders = async () => {
    const respItem = await ItemModel.find({});
    return respItem;
}

export { getOrders };