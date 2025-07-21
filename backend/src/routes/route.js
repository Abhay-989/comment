import express from 'express';
import { deleteRoute, getAllRoute, createRoute,updateRoute,getRoute } from '../controller/route.js';
const router = express.Router();
router.get('/', getAllRoute);
router.get('/:id', getRoute); 
router.post('/', createRoute);
router.put('/:id', updateRoute);
router.delete('/:id', deleteRoute);
export default router;






