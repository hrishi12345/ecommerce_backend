import Product from "../models/productControl.js";

class ProductRepository{
    async createProduct(data){
        try {
            const product=await Product.create(data)
            return product
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async getProduct(data){
        try {
            const getProduct=await Product.findById(data)
            return getProduct
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async getAllProduct(){
        try {
            const getProduct=await Product.find()
            return getProduct
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async updateProduct(id,data){
        try {
            const update=await Product.findByIdAndUpdate(id,data,{new:true,})
            return update
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async deleteProduct(id){
        try {
            const deleteProduct=await Product.findByIdAndDelete(id)
            return deleteProduct
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
}
export default ProductRepository