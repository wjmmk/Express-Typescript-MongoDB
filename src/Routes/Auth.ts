import { Router } from "express";
import { registerCtrl, loginCtrl } from '../Controllers/Auth.controller';

const router = Router();
/** http://localhost:3000/auth/rgister [POST] */
router.post('/register', registerCtrl)
router.post('/login', loginCtrl)

export { router }