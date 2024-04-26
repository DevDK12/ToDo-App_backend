import mongoose from "mongoose";
import validator from "validator";

import {IUser, genderTypes, roleTypes} from "../types/UserTypes.js";
import { Model } from "mongoose";



const Schema = mongoose.Schema;







const UserSchema = new Schema<IUser>({
    _id: {
        type: String,
        required: [true, 'ID is required'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validator: validator.default.isEmail,
    },

    gender: {
        type: String,
        required: [true, 'Gender is required'],
    },
    dob: {
        type: Date,
        required: [true, 'Date of Birth is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},

    {
        timestamps: true
    }
)


UserSchema.virtual('age').get(function () {
    const today = new Date();
    const dob = this.dob as Date;
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});









const User = mongoose.model<IUser>('User', UserSchema);


export default User;


