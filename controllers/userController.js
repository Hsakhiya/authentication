import UserModel from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
    static userRegistrations = async(req,res)=>{
        const {name,email,password} = req.body
        const user = await UserModel.findOne({email: email})
        if (user) {
            res.json({message:"Email already registered"})
        }else{
            try {
                const salt = await bcrypt.genSalt(15)
                const hashPassword = await bcrypt.hash(password,salt)
                const comapre = bcrypt.compareSync(password, hashPassword)
                console.log(comapre)

            if (name && email && password) {
                const doc = new UserModel({
                    name: name,
                    email: email,
                    password: hashPassword,
                })
                const newDoc = await doc.save()
                res.status(201).json(newDoc)
            } else {
                res.status(405).json({message: "Missing Fields"})
            }
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        }
    }
}


export default UserController