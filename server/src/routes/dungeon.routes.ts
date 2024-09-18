// routes/dungeon.routes.ts

import express from 'express';
import { getDungeon } from '../controllers/dungeon.controller';

const router = express.Router();

router.get('/dungeons', getDungeon);

export default router;