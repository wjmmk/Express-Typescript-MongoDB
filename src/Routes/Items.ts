import { Router } from 'express';
import { getItems, getItem, postItem, updateItem, deleteItem } from '../Controllers/Item.controller';
import { logMiddleware } from '../Middlewares/Log.middle';

const router = Router();

router.get('/', getItems);
router.get('/:id', logMiddleware, getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


export { router };