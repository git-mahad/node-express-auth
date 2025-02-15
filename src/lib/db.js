import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
       const conn = await mongoose.connect(process.env.MONGODB_URI)
       console.log(`MongoDB connected`)
    }
    catch(error){
        console.log("mongodb connection error:", error)
    }
}