import { Document, Schema } from 'mongoose';

export interface IBaseWeaponDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
    energyCore: number
    tiers: {
        1: {
            projectiles: number;
            damage: number;
            accuracy: number;
        },
        2: {
            projectiles: number;
            damage: number;
            accuracy: number;
        },
        3: {
            projectiles: number;
            damage: number;
            accuracy: number;
        },
        4: {
            projectiles: number;
            damage: number;
            accuracy: number;
        },
        5: {
            projectiles: number;
            damage: number;
            accuracy: number;
        } 
    }
}