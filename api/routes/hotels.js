import express from 'express';
// Controllers
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  updatedHotel,
  countByCity,
  countByType,
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
router.get('/find/:id', getHotelById);

// Get All
router.get('/', getAllHotels);

router.get('/countByCity', countByCity);

router.get('/countByType', countByType);

export default router;
