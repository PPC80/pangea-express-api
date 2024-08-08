import express from 'express';
import { getTours, addTour } from '../controllers/tourController.js';

const router = express.Router();

router.get('/tours', getTours);
router.post('/tours', addTour);

export default router;