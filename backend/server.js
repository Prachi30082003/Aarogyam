import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//app config
const app = express()
const port = process.env.PORT || 7000

//middlewares
app.use(express.json()) //whenever we send the request it parses it
app.use(cors()) // helps connect frontend to backend

//api endpoints

app.get('/',(req,res)=>{
    res.end('API WORKING')
})

app.listen(port , ()=>{
    console.log(`App is runing at ${port}`)
})
