import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = () =>{

  // mongoose.connection.on('connected' , ()=> console.log("DATABASE CONNECTED"))

  mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
  .then(()=>{console.log("DB connection successful")})
  .catch((err)=>{
    console.log(err)
    console.log("DB connection failed")
    process.exit(1)
  })
}

export default connectDB