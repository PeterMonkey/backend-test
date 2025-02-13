import { Router } from "express";
import { verifyToken } from '../middlewares/verifyToken.js'
import { projectController } from "../controllers/project.controller.js";

const route = Router()

route.post('/create', verifyToken, projectController.create)
route.get('/', verifyToken, projectController.getProjects)
route.delete('/delete', verifyToken, projectController.deleteProjects)

export default route;