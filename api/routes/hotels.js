import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', (req, res) => {
  console.log('hotels');
});

export default router;
