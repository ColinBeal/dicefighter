import { Schema, model } from 'mongoose';
import { ISpecialDocument } from '../interfaces/special.interface';

const SpecialSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  damageMultiplier: { type: Number, required: false },
  damageRatio: { type: Number, required: false },
  projectileCount: { type: Number, required: false },
  accuracy: { type: Number, required: false }
});

export const Special = model<ISpecialDocument>('Special', SpecialSchema);