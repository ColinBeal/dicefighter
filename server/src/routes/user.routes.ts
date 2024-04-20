// routes/user.routes.ts

import express from 'express';
import { createUser, logUser } from '../controllers/user.controller';

const router = express.Router();

router.post('/auth/signup', createUser);
router.post('/auth/login', logUser);


export default router;