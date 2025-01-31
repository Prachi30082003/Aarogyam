import express from 'express'
import { addDoctor } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router() //using this multiple endpoint can be created

adminRouter.post('/add-doctor',upload.single('image'),addDoctor) //add-doctor is endpoint
           //sending form data through middleware


 export default adminRouter