import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    discription:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String,

    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        default:0,
        type:number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Catogery",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})
export const Product= mongoose.model("Product",productSchema)