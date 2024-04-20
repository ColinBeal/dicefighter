export interface IBaseShip {
    _id: string;
    name: string;
    description: string;
    shipClass: {
        _id: string;
        name: string;
        description: string;
    },
    inventorySize: number;
    baseStats: {
        hull: number;
        plating: number;
        evade: number;
        damage: number;
        accuracy: number;
        shield: number;
        shieldRegen: number;
    }
    maxEnergyCore: number;
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