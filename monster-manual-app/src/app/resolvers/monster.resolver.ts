import { Injectable } from '@angular/core';
import { ApiService } from '../services';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MonsterResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const name = route.params['name'];
    return this.apiService.getMonsterByName(name);
  }
}
