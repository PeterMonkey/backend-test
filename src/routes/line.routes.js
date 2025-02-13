import { Router } from "express";
import { lineController } from "../controllers/lines.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const route = Router()

route.post('/create', verifyToken, lineController.create)
route.get('/:id', verifyToken, lineController.getLines)
route.delete('/delete', verifyToken, lineController.deleteLines)
route.patch('/update/:id', verifyToken, lineController.updateLine)

export default route;