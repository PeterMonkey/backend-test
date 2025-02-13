import { Router } from "express";
import { userControllers } from "../controllers/user.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js"

const route = Router()

route.post('/register', userControllers.createUser)
route.post('/login', verifyToken, userControllers.login)

export default route