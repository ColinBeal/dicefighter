import { Document, Schema } from 'mongoose';

export interface IBaseShieldDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
    energyCore: number
    tiers: {
        1: {
            shield: number;
            shieldRegen: number;
        },
        2: {
            shield: number;
            shieldRegen: number;
        },
        3: {
            shield: number;
            shieldRegen: number;
        },
        4: {
            shield: number;
            shieldRegen: number;
        },
        5: {
            shield: number;
            shieldRegen: number;
        } 
    }
}