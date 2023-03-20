import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:String,
    role:String
},{timestamps:true})

export const adminModel = mongoose.model('admin',adminSchema)