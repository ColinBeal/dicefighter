import { Schema, model } from 'mongoose';
import { IDiceDocument } from '../interfaces/dice.interface';

const DiceSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  faces: { type: [String], required: true, enum: ['WEA', 'SHD', 'EVD', 'X', 'SPC', 'MON'] }
});

export const Dice = model<IDiceDocument>('Dice', DiceSchema);