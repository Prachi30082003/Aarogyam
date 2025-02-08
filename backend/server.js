import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

//app config
const app = express()
const port = process.env.PORT || 7000


//middlewares
app.use(express.json()) //whenever we send the request it parses it
app.use(cors()) // helps connect frontend to backend

//api endpoints
app.use('/api/admin' , adminRouter)
//localhost:7000/api/admin/add-doctor when this endpoint will hit add-doctor api handler will run

app.use('/api/doctor' , doctorRouter)
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
    res.end('API WORKING')
})

app.listen(port , ()=>{
    console.log(`App is runing at ${port}`)
})

connectDB()
connectCloudinary()
