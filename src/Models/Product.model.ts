import { model, Schema } from "mongoose";
import { Product } from "../Interfaces/product.interface";

const ProductSchema = new Schema<Product>(
    {
        name: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
            unique: true
        }  
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ProductModel = model('Product', ProductSchema)

export default ProductModel;