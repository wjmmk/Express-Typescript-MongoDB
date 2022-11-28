import { Response } from "express"
import { RequestExt } from "../Interfaces/req_ext"
import { Storage } from "../Interfaces/storage.interface";
import { registerUpload } from "../Services/Storage.service";
import { handleHttp } from "../Utils/error.handle"


const getFile = async (req: RequestExt, res: Response) => {
    try {
        const {user, file} = req;
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }

        const respInfo = await registerUpload(dataToRegister);
        console.log(file)
        res.send(respInfo);
    } catch (err) {
        handleHttp(res, 'ERROR_GET_ BLOG')
    }
}

export { getFile }