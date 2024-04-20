import { Schema, model } from 'mongoose';
import { IBaseShieldDocument } from '../interfaces/base-shield.interface';

const BaseShieldSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  energyCore: { type: Number, required: true },
  tiers: {
    1: {
      shield: { type: Number, required: true },
      shieldRegen: { type: Number, required: true },
    },
    2: {
      shield: { type: Number, required: true },
      shieldRegen: { type: Number, required: true },
    },
    3: {
      shield: { type: Number, required: true },
      shieldRegen: { type: Number, required: true },
    },
    4: {
      shield: { type: Number, required: true },
      shieldRegen: { type: Number, required: true },
    },
    5: {
      shield: { type: Number, required: true },
      shieldRegen: { type: Number, required: true },
    }
  }
});

export const BaseShield = model<IBaseShieldDocument>('BaseShield', BaseShieldSchema);
