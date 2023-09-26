import express from 'express'
import { Login, SignUp, updateUserController } from '../controller/userController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { updateProduct } from '../controller/productController.js'

const router=express.Router()

router.post('/addUser',SignUp)
router.post('/login',Login)
router.get('/verify',authMiddleware)
router.put('/updateuser/:email',updateUserController)
export default router