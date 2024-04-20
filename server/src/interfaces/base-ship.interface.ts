import { Document, Schema } from 'mongoose';

export interface IBaseShipDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description: string;
    shipClass: Schema.Types.ObjectId;
    inventorySize: number; 
    baseStats: {
        hull: number;
        plating: number;
        evade: number;
        damage: number;
        accuracy: number;
        shield: number;
        shieldRegen: number;
    }
    maxEnergyCore: number;
    special: Schema.Types.ObjectId;
}