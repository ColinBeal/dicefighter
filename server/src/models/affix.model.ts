import { Schema, model } from 'mongoose';
import { IAffixDocument } from '../interfaces/affix.interface';

const AffixSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['prefix', 'suffix'], required: true },
    effects: [{
        stat: { type: String, required: true },
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    }],
    level: { type: Number, required: true }
});


export const Affix = model<IAffixDocument>('Affix', AffixSchema);
