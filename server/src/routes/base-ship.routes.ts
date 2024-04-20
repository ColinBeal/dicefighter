import express from 'express';
import { findBaseShips } from '../controllers/base-ship.controller';

const router = express.Router();

router.get('/base-ship', findBaseShips);

export default router;