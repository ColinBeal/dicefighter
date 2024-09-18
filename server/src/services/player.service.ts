export function calculateAttackSpeed(dex: number, attackSpeedModifier: number, baseAttackSpeed: number) {
    const K = 50; // Adjust this to tune the curve
    const baseSpeedIncrease = dex / K;
    return baseAttackSpeed * (1 + baseSpeedIncrease) * (1 + attackSpeedModifier);
  }
  
export function calculateAccuracy(agility: number, baseAccuracy: number) {
    const k = 25;
    const maxAcc = 1; // Maximum accuracy as 95%
    const scalingFactor = (agility) / (agility + k);
    return baseAccuracy + (maxAcc - baseAccuracy) * scalingFactor;
  }
  
  export function calculateAttackDamage(str: number, baseAttackDamage: number) {
    return (baseAttackDamage + str);
  }
  
  
  export function calculateCritChance(dex: number, critModifier: number) {
    return (dex * 0.5) * (1 + critModifier);
  }
  
  
  export function calculateHPRegen(con: number, hpRegenModifier: number) {
    return con * 0.5 * (1 + hpRegenModifier);
  }
  
  export function calculateDodge(agility: number, dodgeModifier: number) {
    return agility * 0.2 * (1 + dodgeModifier);
  }

  export function calculateHP(con: number, hpFlatModifier: number, level: number) {
    return (level * 50 + hpFlatModifier) + con * 25;
  }