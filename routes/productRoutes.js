import express from 'express'
import { createProductController, deleteProduct, getAllProduct, getProduct, updateProduct } from '../controller/productController.js'
import { isAdmin ,authMiddleware} from '../middlewares/authMiddleware.js'
const router=express.Router()

router.post('/createproduct',createProductController)
router.get('/getProduct/:id',getProduct)
router.get('/getallproduct',getAllProduct)
router.put('/updateproduct/:id',authMiddleware,isAdmin,updateProduct)
router.delete('/deleteproduct/:id',deleteProduct)
router.get('/filter/:id',getProduct)

export default router