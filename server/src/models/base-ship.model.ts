import { Schema, model } from 'mongoose';
import { IBaseShipDocument } from '../interfaces/base-ship.interface';
import { ShipClass } from './ship-class.model';
import { Special } from './special.model';

const BaseShipSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  shipClass: { type: Schema.Types.ObjectId, required: true, ref: ShipClass },
  inventorySize: { type: Number, required: true },
  baseStats: {
    hull: { type: Number, required: true },
    plating: { type: Number, required: true },
    evade: { type: Number, required: true },
    damage: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    shield: { type: Number, required: true },
    shieldRegen: { type: Number, required: true }
  },
  maxEnergyCore: { type: Number, required: true },
  special: { type: Schema.Types.ObjectId, required: true, ref: Special }
});

export const BaseShip = model<IBaseShipDocument>('BaseShip', BaseShipSchema);