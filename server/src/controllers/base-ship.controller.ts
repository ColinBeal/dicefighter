// controllers/salary.controller.ts

import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { BaseShip } from '../models/base-ship.model';

dotenv.config();

export async function findBaseShips(req: Request, res: Response) {
  const session = req.session as any;

  const baseShips = await BaseShip.find().populate('shipClass').populate('special')
  if (!baseShips) {
    return res.status(404).json({ message: 'Base ships not found' });
  }
  
  return res.status(200).json(
    { message: 'Base ships found', 
      data: baseShips
    }
  );
}
