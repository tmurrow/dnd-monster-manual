import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.local';
import { Monster } from '../models'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get ApiBaseUrl(): string {
    return environment.api_url;
  }

  getMonsters(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.ApiBaseUrl+'monsters');
  }

  getMonsterById(id): Observable<Monster> {
    return this.http.get<Monster>(this.ApiBaseUrl+'monsters/' + id);
  }

  getMonsterByName(url): Observable<Monster> {
    return this.http.get<Monster>(this.ApiBaseUrl+'monsters/' + url);
  }
}
