import express from 'express';
// Controllers
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  updatedHotel,
} from '../controllers/hotel.js';
// Utilities
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create
router.post('/', verifyAdmin, createHotel);

// Update
router.put('/:id', verifyAdmin, updatedHotel);

// Delete
router.delete('/:id', verifyAdmin, deleteHotel);

// Get By ID
router.get('/:id', getHotelById);

// Get All
router.get('/', getAllHotels);

export default router;
