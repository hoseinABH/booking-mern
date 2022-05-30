import express from 'express';
// Controllers
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updatedUser,
} from '../controllers/user.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/check', verifyToken, (req, res, next) => {
  res.send('Hello you are authenticated');
});
// Update
router.put('/:id', updatedUser);

// Delete
router.delete('/:id', deleteUser);

// Get By ID
router.get('/:id', getUserById);

// Get All
router.get('/', getAllUsers);

export default router;
