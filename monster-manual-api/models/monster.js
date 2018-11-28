let mongoose = require('mongoose')
let monsterSchema = mongoose.Schema({
  name: String,
  size: String,
  monster_type: String,
  tags: [String],
  alignment: String,
  ac: Number,
  ac_note: String,
  hp: String,
  hd: String,
  ability_scores: [Number],
  saving_throws: [Number],
  passive_perception: Number,
  cr: Number,
  xp: Number,
  languages: [String],
  vulnerabilities: [String],
  immunities: [String],
  resistances: [String],
  condition_immunities: [String],
  climate: [String],
  terrain: [String],
  rarity: String,
  organization: String,
  activity_cycle: String,
  diet: String,
  habitat_society: String,
  ecology: String,
  skills: [{
    skill: String,
    bonus: Number
  }],
  senses: [{
    sense: String,
    distance: Number
  }],
  speeds: [{
    speed_type: String,
    speed: Number
  }],
  attacks: [{
    weapon: String,
    attack_type: String,
    to_hit: Number,
    reach: Number,
    range: String,
    num_targets: String,
    average_damage: Number,
    damage: String,
    damage_type: String,
    effect: String
  }],
  abilities: [{
    name: String,
    ability_type: String,
    effect: String
  }]
}, { collection: 'monsters' })
let Monster = mongoose.model('Monster', monsterSchema)
module.exports = Monster
