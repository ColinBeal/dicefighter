import { Document, Schema } from 'mongoose';

export interface IModifierDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    valueType: 'flat' | 'percent';
    type: 'damage' | 'plating' | 'hullRegen' | 'hull' | 'accuracy' | 'evasion' | 'shield' | 'shieldRegen';
}

export interface IModifier {
    _id: string;
    name: string;
    valueType: 'flat' | 'percent';
    type: 'damage' | 'plating' | 'hullRegen' | 'hull' | 'accuracy' | 'evasion' | 'shield' | 'shieldRegen';
}