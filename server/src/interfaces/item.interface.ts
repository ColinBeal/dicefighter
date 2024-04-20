import { Document, Schema } from 'mongoose';

export interface IItemDocument extends Document {
    _id: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    name: string;
    description: string;
    type: 'weapon' | 'shield' | 'engine' | 'plating' | 'consumable' | 'companion' | 'dice';
    weaponData?: Schema.Types.ObjectId;
    shieldData?: Schema.Types.ObjectId;
    engineData?: Schema.Types.ObjectId;
    platingData?: Schema.Types.ObjectId;
    companionData?: Schema.Types.ObjectId;
    consumableData?: Schema.Types.ObjectId;
    diceData?: Schema.Types.ObjectId;
}