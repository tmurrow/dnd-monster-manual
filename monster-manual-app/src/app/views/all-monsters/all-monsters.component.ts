import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdService } from '../../services';

@Component({
  selector: 'app-all-monsters',
  templateUrl: './all-monsters.component.html',
  styleUrls: ['./all-monsters.component.scss']
})
export class AllMonstersComponent implements OnInit {
monsters;
monsterId;

  constructor(private route: ActivatedRoute, private router: Router, private idService: IdService) { }

  ngOnInit() {
    this.monsters = this.route.snapshot.data.monsterList.body;
    this.addMonsterRoutes();
  }

  addMonsterRoutes() {
    this.monsters.forEach(monster => {
      monster.route = monster.name;
    });
  }

  navigate(name, id) {
    this.monsterId = id;
    this.idService.updateId(this.monsterId);
    this.router.navigate(["monsters/" + name]);
  }

}
