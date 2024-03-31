// routes/salary.routes.ts

import express from 'express';
import { createSalary, findSalaries } from '../controllers/salary.controller';

const router = express.Router();

router.post('/salary', createSalary);

router.get('/salary', findSalaries);

export default router;