import express from 'express'
import { addDoctor,loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router() //using this multiple endpoint can be created

adminRouter.post('/add-doctor',authAdmin, upload.single('image'),addDoctor) //add-doctor is endpoint
         //sending form data through middleware
 adminRouter.post('/login',loginAdmin)

 export default adminRouter