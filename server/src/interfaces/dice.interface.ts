import { Document, Schema } from 'mongoose';

export interface IDiceDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
    faces: Face[]
}

export type Face = 'WEA' | 'SHD' | 'EVD' | 'X' | 'SPC' | 'MON';