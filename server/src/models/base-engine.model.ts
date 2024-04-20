import { Schema, model } from 'mongoose';
import { IBaseEngineDocument } from '../interfaces/base-engine.interface';

const BaseEngineSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  energyCore: { type: Number, required: true },
  tiers: {
    1: {
      evade: { type: Number, required: true },
      escapeThreshold: { type: Number, required: true },
    },
    2: {
      evade: { type: Number, required: true },
      escapeThreshold: { type: Number, required: true },
    },
    3: {
      evade: { type: Number, required: true },
      escapeThreshold: { type: Number, required: true },
    },
    4: {
      evade: { type: Number, required: true },
      escapeThreshold: { type: Number, required: true },
    },
    5: {
      evade: { type: Number, required: true },
      escapeThreshold: { type: Number, required: true },
    }  
  }
});

export const BaseEngine = model<IBaseEngineDocument>('BaseEngine', BaseEngineSchema);
