import { Document, Schema } from 'mongoose';

type BaseStatKeys = 'strength' | 'constitution' | 'dexterity' | 'agility' | 'intelligence' | 'wisdom' | 
  'accuracy' | 'attackSpeed' | 'criticalChance' | 'hpRegen' | 'defense' | 'attackDamage' | 'dodge' | 'block' | 
  'fireDamage' | 'poisonDamage' | 'coldDamage' | 'electricDamage' | 'fireResistance' | 'poisonResistance' | 
  'coldResistance' | 'electricResistance' | 'armor';

interface Stat {
    min: number;
    max: number;
}  

export interface IBaseItemDocument extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    type: string;
    subType: string;
    baseStats: Record<BaseStatKeys, Stat>;
}