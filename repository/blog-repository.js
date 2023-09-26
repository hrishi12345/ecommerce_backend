import Blog from "../models/blog.js";

class BlogRepository{
    async createBlog(data){
        try {
            const createBlog=await Blog.create(data)
            return createBlog
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async updateBlog(id,data){
        try {
            const updateBlog=await Blog.findByIdAndUpdate(id,data,{new:true})
            return updateBlog
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async getBlog(id){
        try {
            const getBlog=await Blog.findById(id)
            return getBlog
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async getAllBlog(){
        try {
            const getAllBlog=await Blog.find()
            return getAllBlog
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
    async deleteBlog(id){
        try {
            const deleteBlog=await Blog.findByIdAndDelete(id)
            return deleteBlog
        } catch (error) {
            console.log(error.message)
            console.log('Error in Repo')
        }
    }
}
export default BlogRepository