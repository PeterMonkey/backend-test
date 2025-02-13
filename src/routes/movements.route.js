import { Router } from "express";
import { movementsController } from "../controllers/movements.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const route = Router();

route.post('/create', verifyToken, movementsController.create)
route.get('/:id', verifyToken, movementsController.getMovements)
route.delete('/delete', verifyToken, movementsController.deleteMovement)

export default route;