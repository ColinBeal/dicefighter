import { Document, Schema } from 'mongoose';

export interface IShipDocument extends Document{
    _id: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    name: string;
    factoryName: string;
    description: string;
    shipClass: Schema.Types.ObjectId;
    inventorySize: number;
    inventory: Schema.Types.ObjectId[];
    weapon?: Schema.Types.ObjectId;
    shield?: Schema.Types.ObjectId;
    engine?: Schema.Types.ObjectId;
    plating?: Schema.Types.ObjectId;
    dices: Schema.Types.ObjectId[];
    stats: {
        hull: number;
        plating: number;
        evade: number;
        damage: number;
        accuracy: number;
        shield: number;
        shieldRegen: number;
    }
    currentStats: {
        hull: number;
        plating: number;
        evade: number;
        damage: number;
        accuracy: number;
        shield: number;
        shieldRegen: number;
    }
    maxEnergyCore: number;
    energyCores: number;
    special: Schema.Types.ObjectId;
}