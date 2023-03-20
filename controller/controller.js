import { adminModel } from "../models/adminModel.js";
import { bannerModel } from "../models/bannerModel.js";

// Get current banner data
export const getBanner = async (req, res) => {
  try {
    const bannerData = await bannerModel.findOne();
    console.log('Banner',bannerData)
    res.status(200).json(bannerData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Change banner
export const changeBanner = async (req, res) => {
  try {
    const banner = await bannerModel.findOne();
    if (banner) {
      await bannerModel.updateOne({}, { $set: { url: req.body.url } });
      res.status(204).json(true);
    } else {
      const newBanner = new bannerModel(req.body);
      await newBanner.save();
      res.status(201).json(true);
    }
  } catch (err) {
    console.log('Error',err)
    res.status(500).json(err);
  }
};

// Add admin
export const addAdmin = (req,res)=>{
  try{
    const admin = new adminModel(req.body)
    admin.save().then((response)=>{
      res.status(201).json(response)
    })
  }catch(err){
    res.status(500).json(err)
  }
}

// Get admins data
export const getAdminsData = async(req,res)=>{
  try{
    const data = await adminModel.find().sort({createdAt:'-1'})
    res.status(200).json(data)
  }catch(err){
    res.status(500).json(err)
  }
}

// Update admin role
export const updateAdmin = async(req,res)=>{
  try{
      const response = await adminModel.updateOne({_id:req.body.id},{$set:{role:req.body.role}})
      if(response){
        console.log('updated',req.body,response)
        res.status(200).json(true)
      }
  }catch(err){
    res.status(500).json(err)
  }
}