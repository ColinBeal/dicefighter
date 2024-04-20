import { Schema, model } from 'mongoose';
import { IModifierDocument } from '../interfaces/modifier.interface';

const ModifierSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  valueType: { type: String, required: true, enum: ['flat', 'percent'] },
  type: { type: String, required: true, enum: ['damage', 'plating', 'hullRegen', 'hull', 'accuracy', 'evasion', 'shield', 'shieldRegen'] },
});

export const Modifier = model<IModifierDocument>('Modifier', ModifierSchema);