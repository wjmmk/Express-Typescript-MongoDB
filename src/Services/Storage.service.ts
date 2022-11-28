import { Storage } from "../Interfaces/storage.interface";
import StorageModel from "../Models/Storage.model";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };