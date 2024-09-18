// Import necessary modules from your application
import { Request, Response } from 'express';
import { Player } from '../models/player.model';
import { calculateAccuracy, calculateAttackDamage, calculateAttackSpeed, calculateHPRegen, calculateCritChance, calculateDodge, calculateHP } from '../services/player.service';
import { createItemFromBase } from '../services/item.service';
import { IItemDocument } from '../interfaces/item.interface';
import { IPlayerDocument } from '../interfaces/player.interface';

const weaponSubTypeAttackSpeed: Record<string, number> = {
  sword: 1.2,
  axe: 1.5,
  dagger: 1.6,
  bow: 1.0,
  staff: 1.0,
  spear: 1.1
}

const weaponSubTypeAccuracy: Record<string, number> = {
  sword: 0.55,
  axe: 0.5,
  dagger: 0.65,
  bow: 0.55,
  staff: 0.65,
  spear: 0.6
}
// Function to create a base player with default stats
export const createBasePlayer = async (req: Request, res: Response) => {
  try {
    const startingChest = await createItemFromBase((req.session as any).userId, { level: 1, type: 'armor', subType: 'chest' });
    const startingLegs = await createItemFromBase((req.session as any).userId, { level: 1, type: 'armor', subType: 'legs' });
    const startingWeapon = await createItemFromBase((req.session as any).userId, { level: 1, type: 'weapon' });
    let primaryStats = {
      strength: 0,
      constitution: 0,
      dexterity: 0,
      agility: 0,
      intelligence: 0,
      wisdom: 0
    }
    // randomly assign primary stats 10points
    let points = 10;
    while (points > 0) {
      const stat = Object.keys(primaryStats)[Math.floor(Math.random() * 6)] as keyof typeof primaryStats;
      primaryStats[stat] += 1;
      points -= 1;
    }
    // Create a new player with base stats
    const newPlayer = new Player({
      user: (req.session as any).userId,  // Get the user from the session
      name: req.body.name || 'Sasha',  // You can get the name from the request or set a default
      level: 1,
      experience: 0,
      statPoints: 2,
      primaryStats: primaryStats,
      baseStats: {
        strength: primaryStats.strength,
        constitution: primaryStats.constitution,
        dexterity: primaryStats.dexterity,
        agility: primaryStats.agility,
        intelligence: primaryStats.intelligence,
        wisdom: primaryStats.wisdom,
        attackDamage: 0,
        attackSpeed: 0,
        accuracy: 0,
        criticalChance: 0,
        range: 0,
        fireDamage: 0,
        poisonDamage: 0,
        coldDamage: 0,
        electricDamage: 0,
        hpRegen: 0,
        armor: 0,
        dodge: 0,
        block: 0,
        fireResistance: 0,
        poisonResistance: 0,
        coldResistance: 0,
        electricResistance: 0,
        hp: 100,
        mp: 100
      },
      currentHp: 100,
      currentMp: 100,
      equipment: {
        helmet: null,
        chest: startingChest?._id,
        legs: startingLegs?._id,
        gloves: null,
        boots: null,
        necklace: null,
        ring1: null,
        ring2: null,
        mainHand: startingWeapon?._id,
        offHand: null
      }
    });
    newPlayer.save();
    const updatedPlayer = await updatePlayerStats(newPlayer._id.toString());
    // add PlayerId to the session
    const session = (req.session as any)
    session.playerId = (updatedPlayer as IPlayerDocument)._id.toString();
    await session.save();
    res.status(201).json(updatedPlayer);
  } catch (error) {
    console.error('Error creating base player:', error);
    res.status(500).json({ message: 'Error creating new player' });
  }
};

export async function getPlayer(req: Request, res: Response) {
  try {
    // Get the player from the database
    const player = await Player.findOne({ user: (req.session as any).userId }).populate('equipment.mainHand')
    .populate('equipment.helmet')
    .populate('equipment.chest')
    .populate('equipment.legs')
    .populate('equipment.gloves')
    .populate('equipment.boots')
    .populate('equipment.necklace')
    .populate('equipment.ring1')
    .populate('equipment.ring2')
    .populate('equipment.offHand').exec();
    if (!player) {
      return res.status(200).json(); // no player found
    }
    // add PlayerId to the session
    const session = (req.session as any)
    session.playerId = player._id.toString();
    await session.save();
    // Send the player as a response
    res.status(200).json(player);
  } catch (error) {
    console.error('Error getting player:', error);
    res.status(500).json({ message: 'Error getting player' });
  }
}

async function updatePlayerStats(playerId: string) {
  let equipmentStatsModifier: IItemDocument["finalStats"] = {
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
    // Elemental Stats
    fireDamage: 0,
    poisonDamage: 0,
    coldDamage: 0,
    electricDamage: 0,
    fireResistance: 0,
    poisonResistance: 0,
    coldResistance: 0,
    electricResistance: 0,
    range: 0,
    hp: 0,
    mp: 0
  }
  const player = await Player.findById(playerId).populate('equipment.mainHand')
                                                .populate('equipment.helmet')
                                                .populate('equipment.chest')
                                                .populate('equipment.legs')
                                                .populate('equipment.gloves')
                                                .populate('equipment.boots')
                                                .populate('equipment.necklace')
                                                .populate('equipment.ring1')
                                                .populate('equipment.ring2')
                                                .populate('equipment.offHand')
                                                .exec();
  if (player) {
    const equipmentKeys = Object.keys(player.equipment).filter(key => player.equipment[key as keyof IPlayerDocument['equipment']] !== null) as Array<keyof typeof player['equipment']>;
    equipmentKeys.forEach(equipmentKey => {
      const item = player.equipment[equipmentKey] as IItemDocument;
      if (item.finalStats) {
        const statKeys = Object.keys(item.finalStats) as Array<keyof IItemDocument["finalStats"]>;
        statKeys.forEach(key => {
          const statValue = item.finalStats[key];
          if (statValue) {
            equipmentStatsModifier[key] += statValue;
          }
        });
      }
    });
    let updatedStats = { ...player.baseStats };
    updatedStats.dexterity = player.primaryStats.dexterity + equipmentStatsModifier.dexterity;
    updatedStats.strength = equipmentStatsModifier.strength + player.primaryStats.strength;
    updatedStats.constitution = equipmentStatsModifier.constitution + player.primaryStats.constitution;
    updatedStats.agility = equipmentStatsModifier.agility + player.primaryStats.agility;
    updatedStats.intelligence = equipmentStatsModifier.intelligence + player.primaryStats.intelligence;
    updatedStats.wisdom = equipmentStatsModifier.wisdom + player.primaryStats.wisdom;
    updatedStats.attackDamage = calculateAttackDamage(player.baseStats.strength, equipmentStatsModifier.attackDamage);
    updatedStats.attackSpeed = calculateAttackSpeed(player.baseStats.dexterity, equipmentStatsModifier.attackSpeed, weaponSubTypeAttackSpeed[(player.equipment.mainHand as IItemDocument).subType]);
    updatedStats.accuracy = calculateAccuracy(player.baseStats.agility, weaponSubTypeAccuracy[(player.equipment.mainHand as IItemDocument).subType]);
    updatedStats.hpRegen = calculateHPRegen(player.baseStats.constitution, equipmentStatsModifier.hpRegen);
    updatedStats.criticalChance = calculateCritChance(player.baseStats.agility, equipmentStatsModifier.criticalChance);
    updatedStats.dodge = calculateDodge(player.baseStats.agility, equipmentStatsModifier.dodge);
    updatedStats.armor = equipmentStatsModifier.armor;
    updatedStats.hp = calculateHP(player.baseStats.constitution, equipmentStatsModifier.hp, player.level);
    updatedStats.mp += equipmentStatsModifier.mp;

    // update player with new baseStats
    player.baseStats = updatedStats;
    await player.save();
    return player;

  }
  // Calculate the player's accuracy
  //player.accuracy = calculateAccuracy(player);

  // Save the updated player to the database
 
}

export async function upgradeStat(req: Request, res: Response) {
  try {
    const player = await Player.findById((req.session as any).playerId).exec();
    console.log((req.session as any).playerId);
    if (player && player.statPoints > 0) {
      const stat = req.body.stat;
      player.primaryStats[(stat as keyof IPlayerDocument['primaryStats'])] += 1;
      player.statPoints -= 1;
      await player.save();
      const updatedPlayer = await updatePlayerStats(player._id.toString());
      res.status(200).json(updatedPlayer);
    } else {
      res.status(400).json({ message: 'Not enough stat points' });
    }
  } catch (error) {
    console.error('Error upgrading stat:', error);
    res.status(500).json({ message: 'Error upgrading stat' });
  }
}