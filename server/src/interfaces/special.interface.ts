import { Document, Schema } from 'mongoose';

export interface ISpecialDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
    damageMultiplier?: number;
    damageRatio?: number;
    projectileCount?: number;
    accuracy?: number;
    target: 'self' | 'enemies'
}