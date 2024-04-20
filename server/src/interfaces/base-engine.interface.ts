import { Document, Schema } from 'mongoose';

export interface IBaseEngineDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
    energyCore: number
    tiers: {
        1: {
            evade: number;
            escapeThreshold: number;
        },
        2: {
            evade: number;
            escapeThreshold: number;
        },
        3: {
            evade: number;
            escapeThreshold: number;
        },
        4: {
            evade: number;
            escapeThreshold: number;
        },
        5: {
            evade: number;
            escapeThreshold: number;
        } 
    }
}