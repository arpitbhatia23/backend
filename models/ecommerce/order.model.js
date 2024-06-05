import mongoose from "mongoose";
const orderItemsSchema=new mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quanitity:{
        type:Number,
        required:true
    }
})
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    adress:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        emun:["pending","cancelled","Deliverrde"],
        default:"pending"
    }
},{timestamps})
export const Order =mongoose.model("Order",orderSchema)