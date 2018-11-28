import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-monsters',
  templateUrl: './all-monsters.component.html',
  styleUrls: ['./all-monsters.component.scss']
})
export class AllMonstersComponent implements OnInit {
monsters;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.monsters = this.route.snapshot.data.monsterList.body;
    this.addMonsterRoutes();
  }

  addMonsterRoutes() {
    this.monsters.forEach(monster => {
      monster.route = monster.name;
    });
  }

}
