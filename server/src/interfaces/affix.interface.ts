import { Document, Schema } from 'mongoose';

export interface IAffixDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    type: string;
    effects: {
        stat: string;
        min: number;
        max: number;
    }[];
    level: number;
}