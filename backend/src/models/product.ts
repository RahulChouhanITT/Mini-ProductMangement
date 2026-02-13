import mongoose  from "mongoose";
import { text } from "node:stream/consumers";

const connection =await mongoose.connect('mongodb://127.0.0.1:27017/Mini-Product-mangment');
const productSchema= await new connection.Schema({
    ProductName: {
        type: String,
        required: true
    },
    Price:{
        type:Number, 
        required:true,
        
    }, 
    Category:{
        type:String,
        required:true,
    }
})
export const Product=mongoose.model("Product", productSchema);