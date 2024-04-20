import { Schema, model } from 'mongoose';
import { IAffixDocument } from '../interfaces/affix.interface';
import { Modifier } from './modifier.model';

const AffixSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  position: { type: String, required: true, enum: ['prefix', 'suffix'] },
  tier: { type: Number, required: true },
  modifierType: { type: Schema.Types.ObjectId, ref: Modifier },
  min: { type: Number, required: true },
  max: { type: Number, required: true }
});

export const Affix = model<IAffixDocument>('Affix', AffixSchema);