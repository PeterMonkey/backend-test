import { Router } from "express";
import { lineController } from "../controllers/lines.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const route = Router()

route.post('/create', verifyToken, lineController.create)
route.get('/:id', verifyToken, lineController.getLines)
route.get('/delete', verifyToken, lineController.deleteLines)

export default route;