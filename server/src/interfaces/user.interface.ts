import { Document, Schema } from 'mongoose';

export interface IUserDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    password: string;
}