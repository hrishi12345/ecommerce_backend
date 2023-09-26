import Category from "../models/category.js";

class CategoryRepo{
    async createCategory(data){
     try {
        const createCategory=await Category.create(data)
        return createCategory
     } catch (error) {
        console.log(error.message)
            console.log('Error in Repo')
     }
    }
    async updateCategory(id,data){
        try {
           const updateCategory=await Category.findByIdAndUpdate(id,data,{new:true})
           return updateCategory
        } catch (error) {
           console.log(error.message)
               console.log('Error in Repo')
        }
       }
}
export default CategoryRepo