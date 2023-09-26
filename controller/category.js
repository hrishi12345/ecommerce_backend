import CategoryService from "../services/category.js";

const categoryservice=new CategoryService

export const createCategoryController=async(req,res)=>{
    try {
        const data=req.body
        const createCategory=await categoryservice.createCategoryService(data)
        return res.status(200).json({message:'SuccessFully creating Category',response:createCategory})
    } catch (error) {
        return res.status(400).json({message:'Error while creating Category',error:error.message})
    }
}
export const updateCategoryController=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const updateCategory=await categoryservice.updateCategoryService(id,data)
        return res.status(200).json({message:'SuccessFully creating Category',response:updateCategory})
    } catch (error) {
        return res.status(400).json({message:'Error while creating Category',error:error.message})
    }
}