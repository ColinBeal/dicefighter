import { Document, Schema } from 'mongoose';
import { IModifier } from './modifier.interface';

export interface IAffixDocument extends Document {
    _id: Schema.Types.ObjectId;
    position: 'prefix' | 'suffix';
    name: string;
    tier: number;
    modifierType: Schema.Types.ObjectId;
    min: number;
    max: number;
}

export interface IAffix {
    _id: string;
    position: 'prefix' | 'suffix';
    name: string;
    tier: number;
    modifierType: IModifier;
    min: number;
    max: number;
}