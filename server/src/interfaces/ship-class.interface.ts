import { Document, Schema } from 'mongoose';

export interface IShipClassDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
}