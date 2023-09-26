import BlogService from "../services/blog-service.js";
const blogsevice=new BlogService

export const createBlogController=async(req,res)=>{
    try {
        const data=req.body
        const createBlog=await blogsevice.createBlogService(data)
        return res.status(200).json({message:'Blog created Successfully',blog:createBlog})
    } catch (error) {
        return res.status(400).json({message:'Error while creating Blog',error:error.message})
    }
}
export const updateBlogController=async(req,res)=>{
    try{
        const {id}=req.params
        const data=req.body
        const updateBlog=await blogsevice.updateBlogService(id,data)
        return res.status(200).json({message:'Blog updated Successfully',blog:updateBlog})
    }catch(error){
        return res.status(400).json({message:'Error while updating Blog',error:error.message})
    }
}
export const getBlogController=async(req,res)=>{
    try{
        const {id}=req.params
        
        const getBlog=await blogsevice.getBlogService(id)
        return res.status(200).json({message:'Blog updated Successfully',blog:getBlog})
    }catch(error){
        return res.status(400).json({message:'Error while updating Blog',error:error.message})
    }
}
export const getAllBlogController=async(req,res)=>{
    try{
        
        
        const getBlog=await blogsevice.getAllBlogService()
        return res.status(200).json({message:'Blog retrieved Successfully',blog:getBlog})
    }catch(error){
        return res.status(400).json({message:'Error while updating Blog',error:error.message})
    }
}
export const deleteBlogController=async(req,res)=>{
    try{
        const {id}=req.params
        
        const getBlog=await blogsevice.deleteBlogService(id)
        return res.status(200).json({message:'Blog delete Successfully'})
    }catch(error){
        return res.status(400).json({message:'Error while updating Blog',error:error.message})
    }
}