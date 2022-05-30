import express from 'express';
// Controllers
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoomById,
  updatedRoom,
} from '../controllers/room.js';
// Utilities
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create
router.post('/:hotelId', verifyAdmin, createRoom);

// Update
router.put('/:id', verifyAdmin, updatedRoom);

// Delete
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);

// Get By ID
router.get('/:id', getRoomById);

// Get All
router.get('/', getAllRooms);

export default router;
