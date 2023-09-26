import{ generateToken }from "../config/jswtoken.js";
import UserService from "../services/user-service.js";
const userService=new UserService

export const SignUp = async (req, res) => {
    try {
        const email = req.body.email;
        const userExists=await userService.findUser(email)
        console.log(userExists)
        if(userExists){
            return res.status(204).json({msg:'User already exists'});
            
        } else {
            // Make sure to include a valid _id in the request body
            
            const newUser=await userService.create({
                email:req.body.email,
            password:req.body.password,
            name:req.body.name
            })
            console.log(newUser)
            return res.status(200).json({msg:'User created Succeff',response:newUser})
            
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
};



export const Login=async (req,res)=>{
    try {
       
        const response=await userService.Login(req.body.email,req.body.password)
        console.log(response)
           return res.status(200).json({
            message:response.message,
            
        success:true
           })
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
}
export const updateUserController=async(req,res)=>{
    try {
        const {email}=req.params
        const data=req.body
        const updateUser=await userService.updateUserService(email,data)
        return res.status(200).json({
            message:res.message,
            
        success:true
           })
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ error });
    }
}
