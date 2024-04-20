// controllers/item.controller.ts

import { Request, Response } from 'express';
import { Item } from '../models/item.model';
import mongoose from 'mongoose';
import { createUserWeapon } from './weapon.controller';

export async function createItem(req: Request, res: Response, type: string) {
  const weaponData: any = await createUserWeapon(req, res);
  console.log(weaponData);
  const item = new Item({
    _id: new mongoose.Types.ObjectId(),
    user: (req.session as any).userId,
    name: weaponData.name,
    description: weaponData.description,
    type: type,
    [`${type}Data`]: weaponData.createdWeapon
  });
  console.log(item);
  return item.save();
}