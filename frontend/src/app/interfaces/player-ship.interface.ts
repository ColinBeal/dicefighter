export interface IShip {
    _id: string;
    name: string;
    factoryName: string;
    description: string;
    shipClass: {
        _id: string;
        name: string;
        description: string;
    },
    inventorySize: number;
    inventory: [];
    baseStats: {
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
    special: {
        _id: string;
        name: string;
        description: string;
        damageMultiplier?: number;
        damageRatio?: number;
        projectileCount?: number;
        accuracy?: number;
        target: 'self' | 'enemies'
    }
}