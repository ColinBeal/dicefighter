import { Schema, model } from 'mongoose';
import { IItemDocument } from '../interfaces/item.interface';
import { Weapon } from './weapon.model';
import { User } from './user.model';

const ItemSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: User, required: true },
  type: { type: String, required: true, enum: ['weapon', 'shield', 'engine', 'plating', 'consumable', 'companion', 'dice'] },
  weaponData: {type: Schema.Types.ObjectId, ref: Weapon},
    /* 
  shieldData?: {type: Schema.Types.ObjectId, ref: 'Shield'},
  engineData?: {type: Schema.Types.ObjectId, ref: 'Engine'},
  platingData?: {type: Schema.Types.ObjectId, ref: 'Plating'},
  companionData?: {type: Schema.Types.ObjectId, ref: 'Companion'},
  consumableData?: {type: Schema.Types.ObjectId, ref: 'Consumable'}
  diceData?: {type: Schema.Types.ObjectId, ref: 'Dice'}
  */
});

export const Item = model<IItemDocument>('Item', ItemSchema);
