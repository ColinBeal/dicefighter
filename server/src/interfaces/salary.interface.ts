import { Document, Schema } from 'mongoose';

export interface ISalary extends Document {
    _id: Schema.Types.ObjectId;
    value: number;
    //companySize?: Schema.Types.ObjectId;
}