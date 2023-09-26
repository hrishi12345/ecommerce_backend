import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/jswtoken.js';
import bcrypt from 'bcrypt'
import UserRepository from "../repository/user-repository.js";
class UserService{
    constructor(){
        this.userRepository=new UserRepository()
    }
    async create(data){
        try {
            
            const userData=await this.userRepository.createUser(data)
            
            return userData
        } catch (error) {
            console.log('Something wrong in sevice')
        }
    }
    async Login(email,plainPassword){
        try {
            const userEmail=await this.findUser(email)
            if(!userEmail){
                return {message:'User Does Not Exists'}
            }
            const checkPass=this.checkPassword(plainPassword,userEmail.password)
            if(!checkPass){
                console.log('Incorrect password')
                throw {error:'Incorrect Password'}
            }
            
            const newJwt=this.createToken({email:userEmail.email,id:userEmail.id})
            
            return newJwt
        } catch (error) {
            console.log('Something wrong in sevice',error)
        }
    }
    async checkPassword(plainPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(plainPassword,encryptedPassword)
        } catch (error) {
            console.log('Error in password')
        }
    }
    async createToken(user){
        try {
            const result= jwt.sign(user,JWT_KEY,{expiresIn:'1h'})
            return result
        } catch (error) {
            console.log('Something went wrong in service layer')
            throw error
        }
    }
    async findUser(data){
        try{
            
            const findUser=await this.userRepository.userExists(data)
            return findUser
        }catch (error){
            console.log('Something wrong in sevice')
        }
    }
    async updateUserService(email,data){
        try {
            // const userEmail=await this.findUser(data)
            const updateUser=await this.userRepository.updateUser(email,data)
            return updateUser
        } catch (error) {
            console.log('Something wrong in sevice')
            console.log(error.message)
        }
    }
    
}
export default UserService