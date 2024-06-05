import mongoose from "mongoose";
const medicalrecordSchema= new mongoose.Schema({},{timestamps:true})
export const MEdicalRecord=mongoose.model("MEdicalRecord",medicalrecordSchema)