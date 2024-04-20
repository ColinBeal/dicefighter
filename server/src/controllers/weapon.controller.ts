// controllers/weeapon.controller.ts

import { Request, Response } from 'express';
import { BaseWeapon } from '../models/base-weapon.model';
import { Weapon } from '../models/weapon.model';
import { Affix } from '../models/affix.model';
import { IAffix } from '../interfaces/affix.interface';

import mongoose from 'mongoose';

export async function createUserWeapon(req: Request, res: Response) {
  const baseWeapons = await BaseWeapon.find();
  if (baseWeapons.length === 0) {
    return res.status(404).json({ message: 'Base weapon not found' });
  }

  // get a random base weapon
  const baseWeapon = baseWeapons[Math.floor(Math.random() * baseWeapons.length)];

  let newWeapon: any = {
    tier: 1,
    rarity: 'common',
    prefix: null,
    suffix: null,
    weaponStats: {},
    prefixStat: {},
    suffixStat: {},
    name: baseWeapon.name,
    energyCore: baseWeapon.energyCore
  };
  // choose wich tier the weapon will be
  const currentFightTier = 1//req.body.tier;

  // get the weapon tier
  let weaponTier = currentFightTier

  // 25% chance to get a weapon of tier above
  if (weaponTier !== 5) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber > 75) {
      weaponTier++;
    }  
  }
  
  newWeapon.tier = weaponTier;
  newWeapon.weaponStats = baseWeapon.tiers[weaponTier as keyof typeof baseWeapon.tiers];


  // get the weapon rarity 1% to be unique, 9% to be epic, 40% to be rare, 50% to be common
  const randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber === 0) {
    newWeapon.rarity = 'unique';
  } else if (randomNumber < 10) {
    newWeapon.rarity = 'epic';
  } else if (randomNumber < 50) {
    newWeapon.rarity = 'rare';
  }
  // get the weapon affixes 1 suffix for rare, 1 prefix and 1 suffix for epic
  if (newWeapon.rarity === 'rare' || newWeapon.rarity === 'epic') {
    const suffixes: IAffix[] = await Affix.find({ position: 'suffix' }).populate('modifierType');
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const suffixValue = Math.floor(Math.random() * (suffix.max - suffix.min + 1)) + suffix.min;
    newWeapon.suffix = suffix._id;
    newWeapon.name = newWeapon.name + ' ' + suffix.name;
    newWeapon.suffixStat = {
      stat: suffix.modifierType.type,
      value: suffixValue,
      valueType: suffix.modifierType.valueType
    }
    if (suffix.modifierType.valueType === 'flat') {
      //get the value of the suffix between min and max
      switch (suffix.modifierType.type) {
        /*case 'projectiles':
          newWeapon.weaponStats.projectiles += suffix.modifierType.value;
          break;*/
        case 'damage':
          newWeapon.weaponStats.damage += suffixValue;
          break;
        case 'accuracy':
          newWeapon.weaponStats.accuracy += suffixValue;
          break;
      }
    } 
    else {
      switch (suffix.modifierType.type) {
        /*case 'projectiles':
          newWeapon.weaponStats.projectiles += newWeapon.weaponStats.projectiles * suffix.modifierType.value / 100;
          break;*/
        case 'damage':
          newWeapon.weaponStats.damage += Math.ceil(newWeapon.weaponStats.damage * suffixValue / 100);
          break;
        case 'accuracy':
          newWeapon.weaponStats.accuracy += Math.ceil(newWeapon.weaponStats.accuracy * suffixValue / 100);
          break;
      }  
    }

    if (newWeapon.rarity === 'epic') {
      const prefixes: IAffix[] = await Affix.find({ position: 'prefix' }).populate('modifierType');
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const prefixValue = Math.floor(Math.random() * (prefix.max - prefix.min + 1)) + prefix.min;
      newWeapon.prefix = prefix._id;
      newWeapon.name = prefix.name + ' ' + newWeapon.name;
      newWeapon.prefixStat = {
        stat: prefix.modifierType.type,
        value: prefixValue,
        valueType: prefix.modifierType.valueType
      }
      if (prefix.modifierType.valueType === 'flat') {
        //get the value of the suffix between min and max
        switch (prefix.modifierType.type) {
          /*case 'projectiles':
            newWeapon.weaponStats.projectiles += prefix.modifierType.value;
            break;*/
          case 'damage':
            newWeapon.weaponStats.damage += prefixValue;
            break;
          case 'accuracy':
            newWeapon.weaponStats.accuracy += prefixValue;
            break;
        }
      } 
      else {
        switch (prefix.modifierType.type) {
          /*case 'projectiles':
            newWeapon.weaponStats.projectiles += newWeapon.weaponStats.projectiles * prefix.modifierType.value / 100;
            break;*/
          case 'damage':
            newWeapon.weaponStats.damage += Math.ceil(newWeapon.weaponStats.damage * prefixValue / 100);
            break;
          case 'accuracy':
            newWeapon.weaponStats.accuracy += Math.ceil(newWeapon.weaponStats.accuracy * prefixValue / 100);
            break;
        }  
      }
    }
  }
  const weapon = new Weapon({
    _id: new mongoose.Types.ObjectId(),
    user: (req.session as any).userId,
    name: newWeapon.name,
    description: newWeapon.description,
    energyCore: newWeapon.energyCore,
    tier: newWeapon.tier,
    rarity: newWeapon.rarity,
    stats: newWeapon.weaponStats,
    prefix: newWeapon.prefix ? newWeapon.prefix : null,
    suffix: newWeapon.suffix ? newWeapon.suffix : null,
    prefixStat: newWeapon.prefixStat ? newWeapon.prefixStat : null,
    suffixStat: newWeapon.suffixStat ? newWeapon.suffixStat : null,
  });

  const savedWeapon = await weapon.save();

  return {
    name: newWeapon.name,
    description: baseWeapon.description,
    createdWeapon: savedWeapon
  }
}