export class Monster {
  route: string;
  name: string;
  size: string;
  monster_type: string;
  tags: [string];
  alignment: string;
  ac: number;
  ac_note: string;
  hp: string;
  hd: string;
  ability_scores: [number];
  saving_throws: [number];
  passive_perception: number;
  cr: number;
  xp: number;
  languages: [string];
  vulnerabilities: [string];
  immunities: [string];
  resistances: [string];
  condition_immunities: [string];
  climate: [string];
  terrain: [string];
  rarity: string;
  organization: string;
  activity_cycle: string;
  diet: string;
  habitat_society: string;
  ecology: string;
  skills: {
    skill: string,
    bonus: number
  }[];
  senses: {
    sense: string,
    distance: number
  }[];
  speeds: {
    speed_type: string,
    speed: number
  }[];
  attacks: {
    weapon: string,
    attack_type: string,
    to_hit: number,
    reach: number,
    range: string,
    num_targets: string,
    average_damage: number,
    damage: string,
    damage_type: string,
    effect: string
  }[];
  abilities: {
    name: string,
    ability_type: string,
    effect: string
  }[];
}
