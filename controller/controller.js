import { bannerModel } from "../models/bannerModel.js";

//Get current banner data
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
