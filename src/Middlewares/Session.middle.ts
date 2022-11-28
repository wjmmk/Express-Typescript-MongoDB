import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../Interfaces/req_ext";
import { verifyToken } from "../Utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
   try {
      // Accediendo al token de Verificacion JWT.
      const jwtByUser = req.headers.authorization || '';
      const jwtBearer = jwtByUser?.split(' ').pop();
      const isUserOk = verifyToken(`${jwtBearer}`) as {id: string};
      console.log(isUserOk)
      if(!isUserOk){
        res.status(401).send('SESSION_INVALID')
      } else { 
        req.user = isUserOk
        next()
      }
      
   } catch (err) {
      res.status(400).send('SESSION_NO_VALID')
   }
}

export { checkJwt }