import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    
    slug:{
       type:String,
       required:true,
       unique:true,
       lowercase:true
    },
   title:{
    type:String,
    required:true,
    trim:true 
   },
   description:{
    type:String,
    required:true,
   },
   price:{
    type:Number,
    required:true,
   },
   category:{
    type:String,
   },
   brand:{
    type:String,

   },
   quantity:{type:Number,
    default:0},
   sold:{
    type:Number,
    default:0,
    select:false
   },
   images:{
    type:Array,
   },
   color:{
    type:String,

   },
   ratings:
    {
        star:Number,
       
    }
   
},{timestamps:true})
const Product=mongoose.model("products",productSchema)
export default Product