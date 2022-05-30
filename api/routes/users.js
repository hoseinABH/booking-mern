import express from 'express';
// Controllers
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updatedUser,
} from '../controllers/user.js';

const router = express.Router();

// Update
router.put('/:id', updatedUser);

// Delete
router.delete('/:id', deleteUser);

// Get By ID
router.get('/:id', getUserById);

// Get All
router.get('/', getAllUsers);

export default router;
