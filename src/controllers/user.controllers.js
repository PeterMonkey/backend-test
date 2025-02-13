import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

export const userControllers = {

    createUser: async (req, res) => {
        try {
            const {name, email, password} = req.body
    
            const hash = await bcrypt.hash(password, 15)
            const user = await UserModel.create({
                name,
                email,
                password: hash
            })
            const token = jwt.sign({id: user._id}, 'my-secret', {expiresIn: '1d'})
            res.status(201).json({
                token
            })
            
        } catch (error) {
            throw new Error(error)
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await UserModel.findOne({email})
            if (!user) {
                return res.status(400).json({
                    message: 'El email no existe'
                })
            }

            const hash = user.password
            const decryptPassword = bcrypt.compareSync(password, hash)

            if (decryptPassword === false) {
                return res.status(400).json({
                    message: 'Contraseña incorrecta'
                })
            }

            const token = jwt.sign({id: user._id}, 'my-secret', {expiresIn: '1d'})

            res.status(200).json({
                token
            })

        } catch (error) {
            throw new Error(error)
        }
    }
}