import express from "express";
import { createCategoryController, updateCategoryController } from "../controller/category.js";
const router=express.Router()

router.post('/createCategory',createCategoryController)
router.put('/updateCategory/:id',updateCategoryController)
export default router