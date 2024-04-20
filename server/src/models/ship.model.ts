import { Schema, model } from 'mongoose';
import { IShipDocument } from '../interfaces/ship.interface';
import { ShipClass } from './ship-class.model';
import { Special } from './special.model';
import { User } from './user.model';
import { Item } from './item.model';
import { Dice } from './dice.model';

const ShipSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  user: { type: Schema.Types.ObjectId, required: true, ref: User },
  name: { type: String, required: true },
  description: { type: String, required: true },
  factoryName: { type: String, required: true },
  shipClass: { type: Schema.Types.ObjectId, required: true, ref: ShipClass },
  inventorySize: { type: Number, required: true },
  inventory: { type: [Schema.Types.ObjectId], ref: Item, required: true },
  dices: { type: [Schema.Types.ObjectId], ref: Dice, required: true },
  weapon: { type: Schema.Types.ObjectId, ref: Item },
  shield: { type: Schema.Types.ObjectId, ref: Item },
  engine: { type: Schema.Types.ObjectId, ref: Item },
  plating: { type: Schema.Types.ObjectId, ref: Item },
  stats: {
    hull: { type: Number, required: true },
    plating: { type: Number, required: true },
    evade: { type: Number, required: true },
    damage: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    shield: { type: Number, required: true },
    shieldRegen: { type: Number, required: true }
  },
  currentStats: {
    hull: { type: Number, required: true },
    plating: { type: Number, required: true },
    evade: { type: Number, required: true },
    damage: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    shield: { type: Number, required: true },
    shieldRegen: { type: Number, required: true }
  },
  maxEnergyCore: { type: Number, required: true },
  energyCores: { type: Number, required: true },
  special: { type: Schema.Types.ObjectId, required: true, ref: Special }
});

export const Ship = model<IShipDocument>('Ship', ShipSchema);