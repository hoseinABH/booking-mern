import express from 'express';
// Controllers
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  updatedHotel,
} from '../controllers/hotel.js';

const router = express.Router();

// Create
router.post('/', createHotel);

// Update
router.put('/:id', updatedHotel);

// Delete
router.delete('/:id', deleteHotel);

// Get By ID
router.get('/:id', getHotelById);

// Get All
router.get('/', getAllHotels);

export default router;
