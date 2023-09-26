import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

const Connection=async ()=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.akrhjb2.mongodb.net/`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true})
        console.log('Database successful')
    }catch(error){
        console.log('ERROR WHILE CONNECTING')
        console.log(error.message)
    }
}
export default Connection