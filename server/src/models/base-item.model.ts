import { Schema, model } from 'mongoose';
import { IBaseItemDocument } from '../interfaces/base-item.interface';

const BaseItemSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['armor', 'weapon'], required: true },
    subType: { type: String, required: true },
    baseStats: {
        strength: { min: Number, max: Number },
        constitution: { min: Number, max: Number },
        dexterity: { min: Number, max: Number },
        agility: { min: Number, max: Number },
        intelligence: { min: Number, max: Number },
        wisdom: { min: Number, max: Number },
        // Offensive and Defensive Stats
        attackSpeed: { min: Number, max: Number },
        accuracy: { min: Number, max: Number },
        criticalChance: { min: Number, max: Number },
        hpRegen: { min: Number, max: Number },
        defense: { min: Number, max: Number },
        attackDamage: { min: Number, max: Number },
        armor: { min: Number, max: Number },
        dodge: { min: Number, max: Number },
        block: { min: Number, max: Number },
        fireDamage: { min: Number, max: Number },
        poisonDamage: { min: Number, max: Number },
        coldDamage: { min: Number, max: Number },
        electricDamage: { min: Number, max: Number },
        fireResistance: { min: Number, max: Number },
        poisonResistance: { min: Number, max: Number },
        coldResistance: { min: Number, max: Number },
        electricResistance: { min: Number, max: Number },
        hp: { min: Number, max: Number },
        mp: { min: Number, max: Number },
        range: { min: Number, max: Number }
    },
    level: { type: Number }
});

export const BaseItem = model<IBaseItemDocument>('BaseItem', BaseItemSchema);
