import mongoose from 'mongoose'
import dotenv from 'dotenv'

const connectDB = async (DATABASE_URL) => {
    
    try {
        const DB_OPTIONS = {
            dbName:"geekshop"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("Database connection established")
    } catch (error) {
        console.error(error)
    }
}


export default connectDB