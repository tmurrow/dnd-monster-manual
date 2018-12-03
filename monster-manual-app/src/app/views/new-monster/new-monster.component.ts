import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-monster',
  templateUrl: './new-monster.component.html',
  styleUrls: ['./new-monster.component.scss']
})
export class NewMonsterComponent implements OnInit {
sizes;
types;
alignments;
speeds;
ability_scores;
damage_types;
conditions;
senses;

  constructor() { }

  ngOnInit() {
    this.buildSizes();
    this.buildTypes();
    this.buildAlignments();
    this.buildSpeeds();
    this.buildAbilityScores();
    this.buildDamageTypes();
    this.buildConditions();
    this.buildSenses();
  }

  buildSizes() {
    this.sizes = [
      "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"
    ];
  }

  buildTypes() {
    this.types = [
      "Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"
    ];
  }

  buildAlignments() {
    this.alignments = [
    "Unaligned", "Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil", "Any Lawful", "Any Chaotic", "Any Good", "Any Evil", "Any Neutral"
    ];
  }

  buildSpeeds() {
    this.speeds = [
      "Walk", "Swim", "Fly", "Hover", "Burrow", "Climb"
    ];
  }

  buildAbilityScores() {
    this.ability_scores = [
        "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"
    ];
  }

  buildDamageTypes() {
    this.damage_types = [
      "Acid", "Cold", "Fire", "Lightning", "Poison", "Bludgeoning", "Piercing", "Slashing", "Force", "Necrotic", "Psychic", "Radiant", "Thunder"
    ];
  }

  buildConditions() {
    this.conditions = [
      "Blinded", "Charmed", "Deafened", "Fatigued", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious"
    ];
  }

  buildSenses() {
    this.senses = [
      "Blindsight", "Darkvision", "Telepathy", "Tremorsense", "Truesight"
    ];
  }
}
