import { Request, Response } from "express"

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    res.status(500)
    res.send({error})
    console.log(errorRaw)
}

const success = function (res: Response, message: string, data?: any, status?: any) {
    res.status(status || 200).send({
        error: '', 
        body: data,
        message: message
    })
}

const error = (res: Response, message: string, status?: any) => {
    res.status(status || 500).send({
        error: message, 
        body: ''
    })
}

export { handleHttp, success, error }