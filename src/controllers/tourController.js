import { tourModel } from '../models/tourModel.js';

export const getTours = async (req, res) => {
    try {
      const tourData = await tourModel.find();
      res.json(tourData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving tours');
    }
  };

  export const addTour = async (req, res) => {
    try {
      const newTour = new tourModel(req.body);
      await newTour.save();
      res.status(201).send('Document inserted');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error inserting document');
    }
  };