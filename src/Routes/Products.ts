import { Router } from "express";
import { getProducts } from '../Controllers/Product.controller';

const router = Router()

router.get('/', getProducts);

export { router }