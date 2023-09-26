import BlogRepository from "../repository/blog-repository.js";

class BlogService{
    constructor(){
        this.blogRepository=new BlogRepository()
    }
    async createBlogService(data){
        try {
            const createBlog=await this.blogRepository.createBlog(data)
            return createBlog
        } catch (error) {
            console.log(error.message)
            console.log('error in service')
        }
    }
    async updateBlogService(id,data){
        try {
            const updateBlog=await this.blogRepository.updateBlog(id,data)
            return updateBlog
        } catch (error) {
            console.log(error.message)
            console.log('error in service')
        }
    }
    async getBlogService(id){
        try {
            const getBlog=await this.blogRepository.getBlog(id)
            return getBlog
        } catch (error) {
            console.log(error.message)
            console.log('error in service')
        }
    }
    async getAllBlogService(){
        try {
            const getAllBlog=await this.blogRepository.getAllBlog()
            return getAllBlog
        } catch (error) {
            console.log(error.message)
            console.log('error in service')
        }
    }
    async deleteBlogService(id){
        try {
            const deleteBlog=await this.blogRepository.deleteBlog(id)
            return deleteBlog
        } catch (error) {
            console.log(error.message)
            console.log('error in service')
        }
    }
}
export default BlogService