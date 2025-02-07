import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import UserRoutes from './routes/userRouter.js'


const app = express()
const port = 3000
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())

connectDB(DATABASE_URL)

app.use(express.json())

app.use('/api/user',UserRoutes)

<<<<<<< HEAD

app.listen(port,()=>{console.log(`Listening on http://localhots:${port}`)})
=======
app.listen(port,()=>{console.log(`Listening on http://localhots:${port}`)})
>>>>>>> 3d04775d753123973a8fbddb0de00bfa727dc7b7
