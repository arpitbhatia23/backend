import mongoose from "mongoose";
const categorySchema= new mongoose.Schema({
    type:String,
    required:true,
    
},{timestamps})
export const Catogery = mongoose.model("Catogery",categorySchema)