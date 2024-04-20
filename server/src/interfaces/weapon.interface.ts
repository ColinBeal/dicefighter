import { Document, Schema } from 'mongoose';

export interface IWeaponDocument extends Document {
    _id: Schema.Types.ObjectId;
    prefix?: Schema.Types.ObjectId;
    suffix?: Schema.Types.ObjectId;
    tier: number;
    energyCore: number;
    rarity: 'common' | 'rare' | 'epic' | 'unique';
    stats: {
        projectiles: number;
        damage: number;
        accuracy: number;
    }
    prefixStat?: {
        stat: 'projectiles' | 'damage' | 'accuracy';
        value: number;
        valueType: 'flat' | 'percent';
    },
    suffixStat?: {
        stat: 'projectiles' | 'damage' | 'accuracy';
        value: number;
        valueType: 'flat' | 'percent';
    }
}