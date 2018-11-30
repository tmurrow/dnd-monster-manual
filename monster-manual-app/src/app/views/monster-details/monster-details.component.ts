import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.component.html',
  styleUrls: ['./monster-details.component.scss']
})
export class MonsterDetailsComponent implements OnInit {
monster;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.monster = this.route.snapshot.data.monster.body;
  }

}
