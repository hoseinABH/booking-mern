import express from 'express';
// Controllers
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updatedUser,
} from '../controllers/user.js';
// Utilities
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Update
router.put('/:id', verifyUser, updatedUser);

// Delete
router.delete('/:id', verifyUser, deleteUser);

// Get By ID
router.get('/:id', verifyUser, getUserById);

// Get All
router.get('/', verifyAdmin, getAllUsers);

export default router;
