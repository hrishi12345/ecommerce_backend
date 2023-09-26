
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'
import { JWT_KEY } from "../config/jswtoken.js";
import UserService from '../services/user-service.js';
import User from '../models/user.js';
const userservice=new UserService
export const authMiddleware=asyncHandler(async (req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        
         token=req.headers.authorization.split(" ")[1]
         try {
            
            if(token){
                console.log(JWT_KEY)
                const decode=jwt.verify(token,JWT_KEY)
                const user=await userservice.findUser(decode.email)
                
                req.user=user 
                console.log(req.user)
                next()
            }
         } catch (error) {
            throw new Error ("Not Authorized")
         }
         
    }else{
        throw new Error ("There is no token attached to header")
    }
})
export const isAdmin=asyncHandler(async (req,res,next)=>{
    
        const {email}=req.user
        
        const adminUser=await User.findOne({email})
        
        if(adminUser.isAdmin){
            console.log(adminUser.isAdmin)
            next()
        }else{
            
            throw new Error ("You are not an admin")
        }
    
})
