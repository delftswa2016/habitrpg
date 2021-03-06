import { ownsItem } from '../gear-helper';
import t from '../../translation';

let armor = {
  lunarArmor: {
    text: t('armorArmoireLunarArmorText'),
    notes: t('armorArmoireLunarArmorNotes', { str: 7, int: 7 }),
    value: 100,
    str: 7,
    int: 7,
    set: 'soothing',
    canOwn: ownsItem('armor_armoire_lunarArmor'),
  },
  gladiatorArmor: {
    text: t('armorArmoireGladiatorArmorText'),
    notes: t('armorArmoireGladiatorArmorNotes', { str: 7, per: 7 }),
    value: 100,
    str: 7,
    per: 7,
    set: 'gladiator',
    canOwn: ownsItem('armor_armoire_gladiatorArmor'),
  },
  rancherRobes: {
    text: t('armorArmoireRancherRobesText'),
    notes: t('armorArmoireRancherRobesNotes', { str: 5, per: 5, int: 5 }),
    value: 100,
    str: 5,
    per: 5,
    int: 5,
    set: 'rancher',
    canOwn: ownsItem('armor_armoire_rancherRobes'),
  },
  goldenToga: {
    text: t('armorArmoireGoldenTogaText'),
    notes: t('armorArmoireGoldenTogaNotes', { attrs: 8 }),
    value: 100,
    str: 8,
    con: 8,
    set: 'goldenToga',
    canOwn: ownsItem('armor_armoire_goldenToga'),
  },
  hornedIronArmor: {
    text: t('armorArmoireHornedIronArmorText'),
    notes: t('armorArmoireHornedIronArmorNotes', { con: 9, per: 7 }),
    value: 100,
    con: 9,
    per: 7,
    set: 'hornedIron',
    canOwn: ownsItem('armor_armoire_hornedIronArmor'),
  },
  plagueDoctorOvercoat: {
    text: t('armorArmoirePlagueDoctorOvercoatText'),
    notes: t('armorArmoirePlagueDoctorOvercoatNotes', { int: 6, str: 5, con: 6 }),
    value: 100,
    int: 6,
    str: 5,
    con: 6,
    set: 'plagueDoctor',
    canOwn: ownsItem('armor_armoire_plagueDoctorOvercoat'),
  },
  shepherdRobes: {
    text: t('armorArmoireShepherdRobesText'),
    notes: t('armorArmoireShepherdRobesNotes', { attrs: 9 }),
    value: 100,
    str: 9,
    per: 9,
    set: 'shepherd',
    canOwn: ownsItem('armor_armoire_shepherdRobes'),
  },
  royalRobes: {
    text: t('armorArmoireRoyalRobesText'),
    notes: t('armorArmoireRoyalRobesNotes', { attrs: 5 }),
    value: 100,
    con: 5,
    per: 5,
    int: 5,
    set: 'royal',
    canOwn: ownsItem('armor_armoire_royalRobes'),
  },
  crystalCrescentRobes: {
    text: t('armorArmoireCrystalCrescentRobesText'),
    notes: t('armorArmoireCrystalCrescentRobesNotes', { attrs: 7 }),
    value: 100,
    per: 7,
    con: 7,
    set: 'crystalCrescent',
    canOwn: ownsItem('armor_armoire_crystalCrescentRobes'),
  },
  dragonTamerArmor: {
    text: t('armorArmoireDragonTamerArmorText'),
    notes: t('armorArmoireDragonTamerArmorNotes', { con: 15 }),
    value: 100,
    con: 15,
    set: 'dragonTamer',
    canOwn: ownsItem('armor_armoire_dragonTamerArmor'),
  },
  barristerRobes: {
    text: t('armorArmoireBarristerRobesText'),
    notes: t('armorArmoireBarristerRobesNotes', { con: 10 }),
    value: 100,
    con: 10,
    set: 'barrister',
    canOwn: ownsItem('armor_armoire_barristerRobes'),
  },
  jesterCostume: {
    text: t('armorArmoireJesterCostumeText'),
    notes: t('armorArmoireJesterCostumeNotes', { int: 15 }),
    value: 100,
    int: 15,
    set: 'jester',
    canOwn: ownsItem('armor_armoire_jesterCostume'),
  },
};

let eyewear = {
  plagueDoctorMask: {
    text: t('eyewearArmoirePlagueDoctorMaskText'),
    notes: t('eyewearArmoirePlagueDoctorMaskNotes'),
    value: 100,
    set: 'plagueDoctor',
    canOwn: ownsItem('eyewear_armoire_plagueDoctorMask'),
  },
};

let head = {
  lunarCrown: {
    text: t('headArmoireLunarCrownText'),
    notes: t('headArmoireLunarCrownNotes', { con: 7, per: 7 }),
    value: 100,
    con: 7,
    per: 7,
    set: 'soothing',
    canOwn: ownsItem('head_armoire_lunarCrown'),
  },
  redHairbow: {
    text: t('headArmoireRedHairbowText'),
    notes: t('headArmoireRedHairbowNotes', { str: 5, int: 5, con: 5 }),
    value: 100,
    str: 5,
    int: 5,
    con: 5,
    canOwn: ownsItem('head_armoire_redHairbow'),
  },
  violetFloppyHat: {
    text: t('headArmoireVioletFloppyHatText'),
    notes: t('headArmoireVioletFloppyHatNotes', { per: 5, int: 5, con: 5 }),
    value: 100,
    per: 5,
    int: 5,
    con: 5,
    canOwn: ownsItem('head_armoire_violetFloppyHat'),
  },
  gladiatorHelm: {
    text: t('headArmoireGladiatorHelmText'),
    notes: t('headArmoireGladiatorHelmNotes', { per: 7, int: 7 }),
    value: 100,
    per: 7,
    int: 7,
    set: 'gladiator',
    canOwn: ownsItem('head_armoire_gladiatorHelm'),
  },
  rancherHat: {
    text: t('headArmoireRancherHatText'),
    notes: t('headArmoireRancherHatNotes', { str: 5, per: 5, int: 5 }),
    value: 100,
    str: 5,
    per: 5,
    int: 5,
    set: 'rancher',
    canOwn: ownsItem('head_armoire_rancherHat'),
  },
  royalCrown: {
    text: t('headArmoireRoyalCrownText'),
    notes: t('headArmoireRoyalCrownNotes', { str: 10 }),
    value: 100,
    str: 10,
    set: 'royal',
    canOwn: ownsItem('head_armoire_royalCrown'),
  },
  blueHairbow: {
    text: t('headArmoireBlueHairbowText'),
    notes: t('headArmoireBlueHairbowNotes', { per: 5, int: 5, con: 5 }),
    value: 100,
    per: 5,
    int: 5,
    con: 5,
    canOwn: ownsItem('head_armoire_blueHairbow'),
  },
  goldenLaurels: {
    text: t('headArmoireGoldenLaurelsText'),
    notes: t('headArmoireGoldenLaurelsNotes', { attrs: 8 }),
    value: 100,
    per: 8,
    con: 8,
    set: 'goldenToga',
    canOwn: ownsItem('head_armoire_goldenLaurels'),
  },
  hornedIronHelm: {
    text: t('headArmoireHornedIronHelmText'),
    notes: t('headArmoireHornedIronHelmNotes', { con: 9, str: 7 }),
    value: 100,
    con: 9,
    str: 7,
    set: 'hornedIron',
    canOwn: ownsItem('head_armoire_hornedIronHelm'),
  },
  yellowHairbow: {
    text: t('headArmoireYellowHairbowText'),
    notes: t('headArmoireYellowHairbowNotes', { attrs: 5 }),
    value: 100,
    int: 5,
    per: 5,
    str: 5,
    canOwn: ownsItem('head_armoire_yellowHairbow'),
  },
  redFloppyHat: {
    text: t('headArmoireRedFloppyHatText'),
    notes: t('headArmoireRedFloppyHatNotes', { attrs: 6 }),
    value: 100,
    con: 6,
    int: 6,
    per: 6,
    canOwn: ownsItem('head_armoire_redFloppyHat'),
  },
  plagueDoctorHat: {
    text: t('headArmoirePlagueDoctorHatText'),
    notes: t('headArmoirePlagueDoctorHatNotes', { int: 5, str: 6, con: 5 }),
    value: 100,
    int: 5,
    str: 6,
    con: 5,
    set: 'plagueDoctor',
    canOwn: ownsItem('head_armoire_plagueDoctorHat'),
  },
  blackCat: {
    text: t('headArmoireBlackCatText'),
    notes: t('headArmoireBlackCatNotes', { attrs: 9 }),
    value: 100,
    int: 9,
    per: 9,
    canOwn: ownsItem('head_armoire_blackCat'),
  },
  orangeCat: {
    text: t('headArmoireOrangeCatText'),
    notes: t('headArmoireOrangeCatNotes', { attrs: 9 }),
    value: 100,
    con: 9,
    str: 9,
    canOwn: ownsItem('head_armoire_orangeCat'),
  },
  blueFloppyHat: {
    text: t('headArmoireBlueFloppyHatText'),
    notes: t('headArmoireBlueFloppyHatNotes', { attrs: 7 }),
    value: 100,
    per: 7,
    int: 7,
    con: 7,
    canOwn: ownsItem('head_armoire_blueFloppyHat'),
  },
  shepherdHeaddress: {
    text: t('headArmoireShepherdHeaddressText'),
    notes: t('headArmoireShepherdHeaddressNotes', { int: 9 }),
    value: 100,
    int: 9,
    set: 'shepherd',
    canOwn: ownsItem('head_armoire_shepherdHeaddress'),
  },
  crystalCrescentHat: {
    text: t('headArmoireCrystalCrescentHatText'),
    notes: t('headArmoireCrystalCrescentHatNotes', { attrs: 7 }),
    value: 100,
    int: 7,
    per: 7,
    set: 'crystalCrescent',
    canOwn: ownsItem('head_armoire_crystalCrescentHat'),
  },
  dragonTamerHelm: {
    text: t('headArmoireDragonTamerHelmText'),
    notes: t('headArmoireDragonTamerHelmNotes', { int: 15 }),
    value: 100,
    int: 15,
    set: 'dragonTamer',
    canOwn: ownsItem('head_armoire_dragonTamerHelm'),
  },
  barristerWig: {
    text: t('headArmoireBarristerWigText'),
    notes: t('headArmoireBarristerWigNotes', { str: 10 }),
    value: 100,
    str: 10,
    set: 'barrister',
    canOwn: ownsItem('head_armoire_barristerWig'),
  },
  jesterCap: {
    text: t('headArmoireJesterCapText'),
    notes: t('headArmoireJesterCapNotes', { per: 15 }),
    value: 100,
    per: 15,
    set: 'jester',
    canOwn: ownsItem('head_armoire_jesterCap'),
  },
};

let shield = {
  gladiatorShield: {
    text: t('shieldArmoireGladiatorShieldText'),
    notes: t('shieldArmoireGladiatorShieldNotes', { con: 5, str: 5 }),
    value: 100,
    con: 5,
    str: 5,
    set: 'gladiator',
    canOwn: ownsItem('shield_armoire_gladiatorShield'),
  },
  midnightShield: {
    text: t('shieldArmoireMidnightShieldText'),
    notes: t('shieldArmoireMidnightShieldNotes', { con: 10, str: 2 }),
    value: 100,
    con: 10,
    str: 2,
    canOwn: ownsItem('shield_armoire_midnightShield'),
  },
  royalCane: {
    text: t('shieldArmoireRoyalCaneText'),
    notes: t('shieldArmoireRoyalCaneNotes', { attrs: 5 }),
    value: 100,
    con: 5,
    int: 5,
    per: 5,
    set: 'royal',
    canOwn: ownsItem('shield_armoire_royalCane'),
  },
  dragonTamerShield: {
    text: t('shieldArmoireDragonTamerShieldText'),
    notes: t('shieldArmoireDragonTamerShieldNotes', { per: 15 }),
    value: 100,
    per: 15,
    set: 'dragonTamer',
    canOwn: ownsItem('shield_armoire_dragonTamerShield'),
  },
};

let weapon = {
  basicCrossbow: {
    text: t('weaponArmoireBasicCrossbowText'),
    notes: t('weaponArmoireBasicCrossbowNotes', { str: 5, per: 5, con: 5 }),
    value: 100,
    str: 5,
    per: 5,
    con: 5,
    canOwn: ownsItem('weapon_armoire_basicCrossbow'),
  },
  lunarSceptre: {
    text: t('weaponArmoireLunarSceptreText'),
    notes: t('weaponArmoireLunarSceptreNotes', { con: 7, int: 7 }),
    value: 100,
    con: 7,
    int: 7,
    set: 'soothing',
    canOwn: ownsItem('weapon_armoire_lunarSceptre'),
  },
  rancherLasso: {
    twoHanded: true,
    text: t('weaponArmoireRancherLassoText'),
    notes: t('weaponArmoireRancherLassoNotes', { str: 5, per: 5, int: 5 }),
    value: 100,
    str: 5,
    per: 5,
    int: 5,
    set: 'rancher',
    canOwn: ownsItem('weapon_armoire_rancherLasso'),
  },
  mythmakerSword: {
    text: t('weaponArmoireMythmakerSwordText'),
    notes: t('weaponArmoireMythmakerSwordNotes', { attrs: 6 }),
    value: 100,
    str: 6,
    per: 6,
    set: 'goldenToga',
    canOwn: ownsItem('weapon_armoire_mythmakerSword'),
  },
  ironCrook: {
    text: t('weaponArmoireIronCrookText'),
    notes: t('weaponArmoireIronCrookNotes', { attrs: 7 }),
    value: 100,
    str: 7,
    per: 7,
    set: 'hornedIron',
    canOwn: ownsItem('weapon_armoire_ironCrook'),
  },
  goldWingStaff: {
    text: t('weaponArmoireGoldWingStaffText'),
    notes: t('weaponArmoireGoldWingStaffNotes', { attrs: 4 }),
    value: 100,
    con: 4,
    int: 4,
    per: 4,
    str: 4,
    canOwn: ownsItem('weapon_armoire_goldWingStaff'),
  },
  batWand: {
    text: t('weaponArmoireBatWandText'),
    notes: t('weaponArmoireBatWandNotes', { int: 10, per: 2 }),
    value: 100,
    int: 10,
    per: 2,
    canOwn: ownsItem('weapon_armoire_batWand'),
  },
  shepherdsCrook: {
    text: t('weaponArmoireShepherdsCrookText'),
    notes: t('weaponArmoireShepherdsCrookNotes', { con: 9 }),
    value: 100,
    con: 9,
    set: 'shepherd',
    canOwn: ownsItem('weapon_armoire_shepherdsCrook'),
  },
  crystalCrescentStaff: {
    text: t('weaponArmoireCrystalCrescentStaffText'),
    notes: t('weaponArmoireCrystalCrescentStaffNotes', { attrs: 7 }),
    value: 100,
    int: 7,
    str: 7,
    set: 'crystalCrescent',
    canOwn: ownsItem('weapon_armoire_crystalCrescentStaff'),
  },
  blueLongbow: {
    text: t('weaponArmoireBlueLongbowText'),
    notes: t('weaponArmoireBlueLongbowNotes', { per: 9, con: 8, str: 7 }),
    value: 100,
    per: 9,
    con: 8,
    str: 7,
    twoHanded: true,
    canOwn: ownsItem('weapon_armoire_blueLongbow'),
  },
  glowingSpear: {
    text: t('weaponArmoireGlowingSpearText'),
    notes: t('weaponArmoireGlowingSpearNotes', { str: 15 }),
    value: 100,
    str: 15,
    canOwn: ownsItem('weapon_armoire_glowingSpear'),
  },
  barristerGavel: {
    text: t('weaponArmoireBarristerGavelText'),
    notes: t('weaponArmoireBarristerGavelNotes', { attrs: 5 }),
    value: 100,
    str: 5,
    con: 5,
    set: 'barrister',
    canOwn: ownsItem('weapon_armoire_barristerGavel'),
  },
  jesterBaton: {
    text: t('weaponArmoireJesterBatonText'),
    notes: t('weaponArmoireJesterBatonNotes', { attrs: 8 }),
    value: 100,
    int: 8,
    per: 8,
    canOwn: ownsItem('weapon_armoire_jesterBaton'),
  },
};

let armoireSet = {
  armor,
  eyewear,
  head,
  shield,
  weapon,
};

export default armoireSet;
