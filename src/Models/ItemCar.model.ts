import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../Interfaces/car.interface";

const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            require: true
        },
        color: {
            type: String,
            required: true
        },
        brand:{
            type: String,
            required: true
        },
        gas: {
            type: String,
            required: true,
            enum: ['Gasoline', 'Electric'],
        },
        age: {
            type: Number
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemCarModel = model('Items', ItemSchema);

export default ItemCarModel;