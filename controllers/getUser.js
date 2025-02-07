import UserModel from "../models/user.js";
import bcrypt from 'bcrypt'

class GetUser{
    static getUsers = async(req,res)=>{
        try {
            const user = await UserModel.find()
            res.json(user)
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export default GetUser