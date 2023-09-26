import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
export const JWT_KEY=process.env.JWT_SECRET
export const SALT=bcrypt.genSaltSync(10)
export const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"3d"})
}
export function generateUniqueID() {
    const min = 1000000000; // 10-digit minimum value
    const max = 9999999999; // 10-digit maximum value
    const uniqueID = Math.floor(Math.random() * (max - min + 1)) + min;
    return uniqueID.toString(); // Convert to string if you need it as a string
  }
  
  
  