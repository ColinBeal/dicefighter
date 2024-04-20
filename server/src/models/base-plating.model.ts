import { Schema, model } from 'mongoose';
import { IBasePlatingDocument } from '../interfaces/base-plating.interface';

const BasePlatingSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  energyCore: { type: Number, required: true },
  tiers: {
    1: {
      plating: { type: Number, required: true },
      hull: { type: Number, required: true },
    },
    2: {
      plating: { type: Number, required: true },
      hull: { type: Number, required: true },
    },
    3: {
      plating: { type: Number, required: true },
      hull: { type: Number, required: true },
    },
    4: {
      plating: { type: Number, required: true },
      hull: { type: Number, required: true },
    },
    5: {
      plating: { type: Number, required: true },
      hull: { type: Number, required: true },
    }  
  }
});

export const BasePlating = model<IBasePlatingDocument>('BasePlating', BasePlatingSchema);
