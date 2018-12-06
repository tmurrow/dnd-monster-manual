import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../services';

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
