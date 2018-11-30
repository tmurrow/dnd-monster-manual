import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  private dataSource = new BehaviorSubject<string>("");
  data = this.dataSource.asObservable();

  constructor() { }

  updateId(data: string) {
    this.dataSource.next(data);
  }
}
