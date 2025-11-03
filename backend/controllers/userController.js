import { getAllUsers } from '../services/userService.js';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

export default router;
