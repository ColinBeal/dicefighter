import { Document, Schema } from 'mongoose';
import { IItemDocument } from './item.interface';

export interface IPlayerDocument extends Document {
    _id: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    name: string;
    level: number;
    experience: number;
    statPoints: number;
    primaryStats: {
        strength: number;
        constitution: number;
        dexterity: number;
        agility: number;
        intelligence: number;
        wisdom: number;
    }
    baseStats: {
        strength: number;
        constitution: number;
        dexterity: number;
        agility: number;
        intelligence: number;
        wisdom: number;
        armor: number;
        attackDamage: number;
        attackSpeed: number;
        accuracy: number;
        criticalChance: number;
        range: number;
        fireDamage: number;
        poisonDamage: number;
        coldDamage: number;
        electricDamage: number;
        hpRegen: number;
        defense: number;
        dodge: number;
        block: number;
        fireResistance: number;
        poisonResistance: number;
        coldResistance: number;
        electricResistance: number;
        hp: number;
        mp: number;
    };
    currentHp: number;
    currentMp: number;
    equipment: {
        helmet: Schema.Types.ObjectId | IItemDocument;
        chest: Schema.Types.ObjectId | IItemDocument;
        legs: Schema.Types.ObjectId | IItemDocument;
        gloves: Schema.Types.ObjectId | IItemDocument;
        boots: Schema.Types.ObjectId | IItemDocument;
        necklace: Schema.Types.ObjectId | IItemDocument;
        ring1: Schema.Types.ObjectId | IItemDocument;
        ring2: Schema.Types.ObjectId | IItemDocument;
        mainHand: Schema.Types.ObjectId | IItemDocument;
        offHand: Schema.Types.ObjectId | IItemDocument;
    };
}