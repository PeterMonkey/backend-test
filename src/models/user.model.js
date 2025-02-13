import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
})

export const UserModel = model('User', userSchema)