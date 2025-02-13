import { Router } from "express";
import { userControllers } from "../controllers/user.controllers.js";

const route = Router()

route.post('/register', userControllers.createUser)
route.post('/login', userControllers.login)

export default route