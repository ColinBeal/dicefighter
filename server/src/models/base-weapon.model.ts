import { Schema, model } from 'mongoose';
import { IBaseWeaponDocument } from '../interfaces/base-weapon.interface';

const BaseWeaponSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  energyCore: { type: Number, required: true },
  tiers: {
    1: {
      projectiles: { type: Number, required: true },
      damage: { type: Number, required: true },
      accuracy: { type: Number, required: true }
    },
    2: {
      projectiles: { type: Number, required: true },
      damage: { type: Number, required: true },
      accuracy: { type: Number, required: true }
    },
    3: {
      projectiles: { type: Number, required: true },
      damage: { type: Number, required: true },
      accuracy: { type: Number, required: true }
    },
    4: {
      projectiles: { type: Number, required: true },
      damage: { type: Number, required: true },
      accuracy: { type: Number, required: true }
    },
    5: {
      projectiles: { type: Number, required: true },
      damage: { type: Number, required: true },
      accuracy: { type: Number, required: true }
    }
  }
});

export const BaseWeapon = model<IBaseWeaponDocument>('BaseWeapon', BaseWeaponSchema);
