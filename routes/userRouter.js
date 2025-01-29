import express from 'express';
const router = express.Router()
import UserController from '../controllers/userController.js';
import GetUser from '../controllers/getUser.js';


router.post('/register', UserController.userRegistrations)


router.get('/users', GetUser.getUsers)


export default router