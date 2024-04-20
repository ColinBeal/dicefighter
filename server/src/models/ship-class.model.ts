import { Schema, model } from 'mongoose';
import { IShipClassDocument } from '../interfaces/ship-class.interface';

const ShipClassSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true }
});

export const ShipClass = model<IShipClassDocument>('ShipClass', ShipClassSchema);