import express from 'express'
import { addDoctor,allDoctors,appointmentsAdmin,loginAdmin ,appointmentCancel,adminDashboard} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router() //using this multiple endpoint can be created

adminRouter.post('/add-doctor',authAdmin, upload.single('image'),addDoctor) //add-doctor is endpoint
         //sending form data through middleware
 adminRouter.post('/login',loginAdmin)
 adminRouter.post('/all-doctors',authAdmin,allDoctors)
 adminRouter.post('/change-availability',authAdmin,changeAvailability)
 adminRouter.get('/appointments',authAdmin,appointmentsAdmin)
 adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
 adminRouter.get('/dashboard',authAdmin,adminDashboard)

 export default adminRouter