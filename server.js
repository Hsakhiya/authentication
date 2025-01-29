import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import UserRoutes from './routes/userRouter.js'


const app = express()
// const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())

connectDB(DATABASE_URL)

app.use(express.json())

app.use('/api/user',UserRoutes)


// app.listen(port,()=>{console.log(`Listening on http://localhots:${port}`)})