import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ApiService, IdService } from '../services';
import { Subscription } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MonsterResolver implements Resolve<any> {
  monsterId;
  private idSubscription: Subscription;

  constructor(private apiService: ApiService, private idService: IdService) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.idSubscription = this.idService.data.subscribe((data) => this.monsterId = data);
    return this.apiService.getMonsterById(this.monsterId);
    // const name = route.params['name'];
    // return this.apiService.getMonsterByName(name);
  }
}
