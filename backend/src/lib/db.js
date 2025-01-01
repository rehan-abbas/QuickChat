import mongoose from "mongoose"

export const connectDB = async()=>{
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`mongodb connect ${conn.connection.host}`)
  } catch (error) {
    console.log("mongodb error",error)
    
  }
}