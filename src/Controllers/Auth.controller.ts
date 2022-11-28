import { Request, Response } from "express";
import { registerNewUser, loginUser } from '../Services/Auth.service';
import { handleHttp } from '../Utils/error.handle';


const registerCtrl = async ({body}: Request, res: Response) => {
    try {
        const respUser = await registerNewUser(body);
        res.send(respUser)
    } catch (err) {
        handleHttp(res, 'ERROR_REGISTER_USER');
    }
}

const loginCtrl = async ({body}: Request, res: Response) => {
    try {
            const { email, password } = body
            const respLoginUser = await loginUser({ email, password });

            if (respLoginUser === "PASSWORD_INCORRECT") {
                res.status(403).send(respLoginUser)
            } else { res.send(respLoginUser) } 

    } catch (err) {
        handleHttp(res, 'ERROR_LOGIN_USER');
    }   
}

export { registerCtrl, loginCtrl }