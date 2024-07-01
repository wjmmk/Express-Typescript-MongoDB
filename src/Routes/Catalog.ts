import { Router } from "express";
import { getProducts, postProduct, getProduct } from '../Controllers/Product.controller';

const router = Router()

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', postProduct);

export { router }