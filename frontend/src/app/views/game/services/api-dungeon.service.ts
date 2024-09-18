import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDungeonService {
  private route = 'http://localhost:3000/dungeons';

  constructor(private http: HttpClient) { }

  getDungeon(): Observable<any> {
    return this.http.get<any>(this.route, { withCredentials: true });
  }
}