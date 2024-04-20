import express from 'express';
import { createUserShip, findUserShips } from '../controllers/ship.controller';

const router = express.Router();

router.post('/ship', createUserShip)
router.get('/ship', findUserShips);

export default router;