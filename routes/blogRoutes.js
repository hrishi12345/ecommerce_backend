import express from "express";
import { createBlogController, deleteBlogController, getAllBlogController, getBlogController, updateBlogController } from "../controller/blogController.js";
const router=express.Router()
router.post('/createBlog',createBlogController)
router.put('/updateblog/:id',updateBlogController)
router.get('/getblog/:id',getBlogController)
router.get('/getallblog',getAllBlogController)
router.delete('/deleteblog/:id',deleteBlogController)
export default router