import { Router } from 'express';
import { getItems } from '../Controllers/Order.controller';
import { checkJwt } from '../Middlewares/Session.middle';

// A esta Ruta solo se accede sí se cuenta con una Session Activa. (Tenga un JWT Válido)
const router = Router();

router.get('/', checkJwt, getItems)

export { router };