import { Schema, model } from 'mongoose';
import { IItemDocument } from '../interfaces/item.interface';

const ItemSchema = new Schema({
    baseItem: { type: Schema.Types.ObjectId, ref: 'BaseItem' },
    affixes: [{ type: Schema.Types.ObjectId, ref: 'Affix' }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    type: { type: String, enum: ['armor', 'weapon'], required: true },
    subType: { type: String, required: true },
    finalStats: {
        armor: Number,
        attackDamage: Number,
        strength: Number,
        constitution: Number,
        dexterity: Number,
        agility: Number,
        intelligence: Number,
        wisdom: Number,
        // Offensive and Defensive Stats
        attackSpeed: Number,
        accuracy: Number,
        criticalChance: Number,
        hpRegen: Number,
        defense: Number,
        dodge: Number,
        block: Number,
        fireDamage: Number,
        poisonDamage: Number,
        coldDamage: Number,
        electricDamage: Number,
        fireResistance: Number,
        poisonResistance: Number,
        coldResistance: Number,
        electricResistance: Number,
        hp: Number,
        mp: Number,
        range: Number
    },
    rarity: {
        type: String,
        enum: ['common', 'uncommon', 'rare', 'epic', 'mythic'],
        required: true
    }
});

export const Item = model<IItemDocument>('Item', ItemSchema);
