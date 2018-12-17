import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

  getMonsterById(id): Observable<any> {
    return this.http.get<any>(this.ApiBaseUrl+'monsters/' + id);
  }

  getMonsterByName(url): Observable<any> {
    return this.http.get<any>(this.ApiBaseUrl+'monsters/' + url);
  }
}
