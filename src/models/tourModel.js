import mongoose from "mongoose";

export const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duracionNoches: {
    type: Number,
    required: true
  },
  duracionDias: {
    type: Number,
    required: true
  }
});

// const TourSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     duracionNoches: Number,
//     duracionDias: Number
// });

export const tourModel = mongoose.model("tourinfos", TourSchema);