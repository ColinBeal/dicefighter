import { Document, Schema } from 'mongoose';

export interface IBasePlatingDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
    energyCore: number
    tiers: {
        1: {
            plating: number;
            hull: number;
        },
        2: {
            plating: number;
            hull: number;
        },
        3: {
            plating: number;
            hull: number;
        },
        4: {
            plating: number;
            hull: number;
        },
        5: {
            plating: number;
            hull: number;
        } 
    }
}