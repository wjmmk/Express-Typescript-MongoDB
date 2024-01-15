import { model, Schema } from "mongoose";
import { User } from "../Interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
        },
        rol: {
            type: String,
            enum: ['Admin', 'User']
        },
        ocupacion: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = model('Users', UserSchema)

export default UserModel;