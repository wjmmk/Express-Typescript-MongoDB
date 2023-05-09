import { Response } from "express";
import { RequestExt } from "../Interfaces/req_ext";
import { handleHttp } from "../Utils/error.handle";


const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({ 
            data: 'Puedes Acceder porque tienes una Session Iniciada',
            user: req.user,
        })
    } catch (err) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}


export { getItems }