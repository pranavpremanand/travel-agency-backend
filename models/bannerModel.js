import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    url:String
},{timestamps:true})

export const bannerModel = mongoose.model('banner',bannerSchema)