// In your routes file (e.g., player.routes.ts)
import express from 'express';
import { createBasePlayer, getPlayer, upgradeStat } from '../controllers/player.controller';  // Adjust the path according to your structure

const router = express.Router();

// Route to create a base player
router.post('/players', createBasePlayer);
router.get('/players', getPlayer);
router.put('/players', upgradeStat);

export default router;