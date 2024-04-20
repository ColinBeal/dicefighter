// controllers/salary.controller.ts

import { Request, Response } from 'express';
import { Ship } from '../models/ship.model';
import { BaseShip } from '../models/base-ship.model';
import mongoose from 'mongoose';
import * as itemController from './item.controller';


export async function findUserShips(req: Request, res: Response) {
  const ships = await Ship.find({user: (req.session as any).userId})
                          .populate('shipClass')
                          .populate('special')
                          .populate('dices')
                          .populate({
                            path: 'weapon',
                            populate: {
                              path: 'weaponData'
                            }
                          })
  if (!ships) {
    return res.status(404).json({ message: 'Ships not found' });
  }
  return res.status(200).json(
    { message: 'ships found', 
      data: ships
    }
  );
}

export async function createUserShip(req: Request, res: Response) {
  const baseShip = await BaseShip.findById(req.body.baseShipId);
  if (!baseShip) {
    return res.status(404).json({ message: 'Base ship not found' });
  }

  const weapon = await itemController.createItem(req, res, 'weapon');
  console.log(weapon);

  const ship = new Ship({
    _id: new mongoose.Types.ObjectId(),
    user: (req.session as any).userId,
    name: baseShip.name,
    factoryName: baseShip.name,
    description: baseShip.description,
    shipClass: baseShip.shipClass,
    inventorySize: baseShip.inventorySize,
    inventory: [],
    dices: [],
    weapon: weapon._id,
    stats: baseShip.baseStats,
    currentStats: baseShip.baseStats,
    maxEnergyCore: baseShip.maxEnergyCore,
    energyCores: 4,
    special: baseShip.special
  });
  ship.save().then(result => {
    res.status(201).json(
      { 
        message: 'Ship created', 
        data: result
      }
    );
  }).catch(err => {
    res.status(500).json({ error: err });
  });
}