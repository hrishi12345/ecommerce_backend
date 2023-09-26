import CategoryRepo from "../repository/category.js";

class CategoryService{
    constructor(){
        this.categoryService=new CategoryRepo()
    }
    async createCategoryService(data){
        try {
            const createCategory=await this.categoryService.createCategory(data)
            return createCategory
        } catch (error) {
            console.log(error.message)
            console.log('error in service')
        }
    }
    async updateCategoryService(id,data){
        try {
            const updateCategory=await this.categoryService.updateCategory(id,data)
            return updateCategory
        } catch (error) {
            console.log(error.message)
            console.log('error in service')
        }
    }
}export default CategoryService