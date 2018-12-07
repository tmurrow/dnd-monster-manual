import { Component, OnInit, Input } from '@angular/core';
import { StaticDataService } from '../../services';

@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss']
})
export class MonsterFormComponent implements OnInit {
@Input() monster;
sizes;
types;
alignments;
speeds;
ability_scores;
damage_types;
conditions;
senses;

  constructor(private staticDataService: StaticDataService) { }

  ngOnInit() {
    this.buildStaticData();
  }

  buildStaticData() {
    this.sizes = this.staticDataService.getSizes();
    this.types = this.staticDataService.getTypes();
    this.alignments = this.staticDataService.getAlignments();
    this.speeds = this.staticDataService.getSpeeds();
    this.ability_scores = this.staticDataService.getAbilityScores();
    this.damage_types = this.staticDataService.getDamageTypes();
    this.conditions = this.staticDataService.getConditions();
    this.senses = this.staticDataService.getSenses();
  }

}