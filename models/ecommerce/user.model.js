import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    usename:{type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{type:String,
        required:true,
    },
},{timestamps})
export const User= mongoose.Model("User",userSchema)