import ProductRepository from "../repository/product-repository.js";

class ProductService{
    constructor(){
        this.productRepository=new ProductRepository()
    }
    async createProductService(data){
        try {
            const createProduct=await this.productRepository.createProduct(data)
            return createProduct 
        } catch (error) {
            console.log(error.message)
            console.log('Error in Service')
        }
    }
    async getProductService(data){
        try {
            const getProduct=await this.productRepository.getProduct(data)
            return getProduct
        } catch (error) {
            console.log(error.message)
            console.log('Error in Service')
        }
    }
    async getAllProductService(){
        try {
            const getProduct=await this.productRepository.getAllProduct()
            return getProduct
        } catch (error) {
            console.log(error.message)
            console.log('Error in Service')
        }
    }
    async updateProductService(id,data){
        try {
            const updateProduct=await this.productRepository.updateProduct(id,data)
            return updateProduct
        } catch (error) {
            console.log(error.message)
            console.log('Error in Service')
        }
    }
    async deleteProductService(id){
        try {
            const deleteProduct=await this.productRepository.deleteProduct(id)
            return deleteProduct
        } catch (error) {
            console.log(error.message)
            console.log('Error in Service')
        }
    }
}
export default ProductService