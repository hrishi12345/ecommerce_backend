import Product from "../models/productControl.js";
import ProductService from "../services/product-service.js";
import slugify from "slugify";
const productService=new ProductService

export const createProductController=async(req,res)=>{
    try {
        if(req.body.title){
            req.body.slug=slugify(req.body.title)
        }
        const create=await productService.createProductService(req.body)
        return res.status(200).json({message:'Product Created Successfully',product:create})
    } catch (error) {
        return res.status(400).json({message:'error while creating product'})
    }
}

export const getProduct=async(req,res)=>{
    try {
        const {id}=req.params
        const get=await productService.getProductService(id)
        return res.status(200).json({message:'Product Successfully',product:get})
    } catch (error) {
        return res.status(400).json({message:'error while getting product'})
    }
}
export const updateProduct=async(req,res)=>{
    try {
        
        if(req.body.title){
            req.body.slug=slugify(req.body.title)
        }
        const {id}=req.params
        const data=req.body
        const update=await productService.updateProductService(id,data)
        return res.status(200).json({message:'Product updateSucceffully',product:update})
    } catch (error) {
        return res.status(400).json({message:'error while updating product',error:error.message})
    }
}
export const deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params
        const deleteProduct=await productService.deleteProductService(id)
        return res.status(200).json({message:'Product Succefdelete fully'})
    } catch (error) {
        return res.status(400).json({message:'error while deleting product',error:error.message})
    }
}
export const getAllProduct=async(req,res)=>{
    try {
        
        const get=await productService.getAllProductService()
        return res.status(200).json({message:'Product Successfully',product:get})
    } catch (error) {
        return res.status(400).json({message:'error while getting product'})
    }
}
export const filterProductController=async(req,res)=>{
    try {
        const queryObj={...req.query}
        const excludeFields=['page','sort','limit','fields']
        excludeFields.forEach((ele)=>delete queryObj[ele])
        const queryStr=JSON.stringify(queryObj)
        queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`)
        console.log(JSON.parse(queryStr))
        const query=Product.find(JSON.parse(queryStr))
        const product=await query 
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
}