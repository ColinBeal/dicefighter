import { Schema, model } from 'mongoose';
import { IWeaponDocument } from '../interfaces/weapon.interface';
import { Affix } from './affix.model';

const WeaponSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  prefix: { type: Schema.Types.ObjectId, ref: Affix },
  suffix: { type: Schema.Types.ObjectId, ref: Affix },
  tier: { type: Number, required: true },
  energyCore: { type: Number, required: true },
  rarity: { type: String, required: true, enum: ['common', 'rare', 'epic', 'unique'] },
  stats: {
    projectiles: { type: Number, required: true },
    damage: { type: Number, required: true },
    accuracy: { type: Number, required: true }
  },
  prefixStat: {
    stat: { type: String, enum: ['projectiles', 'damage', 'accuracy'] },
    value: { type: Number },
    valueType: { type: String, enum: ['flat', 'percent'] },
  },
  suffixStat: {
    stat: { type: String, enum: ['projectiles', 'damage', 'accuracy'] },
    value: { type: Number, },
    valueType: { type: String, enum: ['flat', 'percent'] }
  }
});

export const Weapon = model<IWeaponDocument>('Weapon', WeaponSchema);