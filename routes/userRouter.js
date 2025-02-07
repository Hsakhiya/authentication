import express from 'express'
const router = express.Router()
import UserController from '../controllers/usercontroller.js'
import GetUser from '../controllers/getUser.js'


router.post('/register', UserController.userRegistrations)

router.post('/login', UserController.userLogin)


router.get('/users', GetUser.getUsers)


export default router