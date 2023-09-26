import User from "../models/user.js";

class UserRepository{
    async createUser(data){
        try {
            
            const user= new User(data)
            console.log(user)
            await user.save()
            
            return user
        } catch (error) {
            console.log(error)
            console.log('Something wrong in repo')
        }
    }
    async userExists(data){
        try {
            
            const user=await User.findOne({email:data})
            
            return user
        } catch (error) {
            console.log('Something wrong in repo')
        }
    }
   async updateUser(email,data){
    try {
        const update=await User.findOneAndUpdate({email:email},data,{new:true})
        return update
    } catch (error) {
        console.log(error.message)
        console.log('Something wrong in repo')
    }
   }
}

export default UserRepository