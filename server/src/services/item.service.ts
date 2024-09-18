
import { IItemDocument } from '../interfaces/item.interface';
import { BaseItem } from '../models/base-item.model';
import { Item } from '../models/item.model';
import { getRandomInt } from '../utils/random';

export async function getBaseItems(query: any) {
  try {
    const items = await BaseItem.find(query);
    return items;
  } catch (error) {
    console.error('Error getting base items:', error);
  }
}

export async function createItemFromBase(userId: string, query: any) {
  try {
    const baseItem = await BaseItem.findOne(query);
    if (baseItem) {
      let finalStats: IItemDocument['finalStats'] = {
        armor: 0,
        attackDamage: 0,
        strength: 0,
        constitution: 0,
        dexterity: 0,
        agility: 0,
        intelligence: 0,
        wisdom: 0,
        // Offensive and Defensive Stats
        attackSpeed: 0,
        accuracy: 0,
        criticalChance: 0,
        hpRegen: 0,
        defense: 0,
        dodge: 0,
        block: 0,
        fireDamage: 0,
        poisonDamage: 0,
        coldDamage: 0,
        electricDamage: 0,
        fireResistance: 0,
        poisonResistance: 0,
        coldResistance: 0,
        electricResistance: 0,
        hp: 0,
        mp: 0,
        range: 0
      };
      for (const key of Object.keys(baseItem.baseStats) as Array<keyof typeof baseItem['baseStats']>) {
        if (baseItem.baseStats[key].min) {
          finalStats[key] = getRandomInt(baseItem.baseStats[key]?.min, baseItem.baseStats[key]?.max);
        }  
      }
      const item = new Item({
        baseItem: baseItem._id,
        affixes: [],
        name: baseItem.name,
        type: baseItem.type,
        subType: baseItem.subType,
        user: userId,
        finalStats: finalStats,
        rarity: 'common'
      });
      item.save();
      return item;
    }    
  } catch (error) {
    console.error('Error getting base items:', error);
  }
}  
