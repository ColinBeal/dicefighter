import { Document, Schema } from 'mongoose';

export interface IItemDocument extends Document {
    _id: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    name: string;
    type: string;
    subType: string;
    baseItem: Schema.Types.ObjectId;
    affixes: Schema.Types.ObjectId[];
    finalStats: {
        armor: number;
        attackDamage: number;
        strength: number;
        constitution: number;
        dexterity: number;
        agility: number;
        intelligence: number;
        wisdom: number;
        // Offensive and Defensive Stats
        attackSpeed: number;
        accuracy: number;
        criticalChance: number;
        hpRegen: number;
        defense: number;
        dodge: number;
        block: number;
        // Elemental Stats
        fireDamage: number;
        poisonDamage: number;
        coldDamage: number;
        electricDamage: number;
        fireResistance: number;
        poisonResistance: number;
        coldResistance: number;
        electricResistance: number;
        range: number;
        hp: number;
        mp: number;
    };
    rarity: string;
}

/*

 baseItem: { type: Schema.Types.ObjectId, ref: 'BaseItem' },
    affixes: [{ type: Schema.Types.ObjectId, ref: 'Affix' }],
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
        accuracy: Number,
        criticalChance: Number,
        hpRegen: Number,
        defense: Number,
        dodge: Number,
        block: Number,
        // Elemental Stats
        elementalDamage: {
            fire: Number,
            poison: Number,
            cold: Number,
            electric: Number
        },
        elementalResistance: {
            fire: Number,
            poison: Number,
            cold: Number,
            electric: Number
        }
    },
    rarity: {
        type: String,
        enum: ['common', 'uncommon', 'rare', 'epic', 'mythic'],
        required: true
    }*/