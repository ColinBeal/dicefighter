import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPlayerService {
  private route = 'http://localhost:3000/players';

  constructor(private http: HttpClient) { }

  createBasePlayer(name: string): Observable<any> {
    return this.http.post<any>(this.route, { name }, { withCredentials: true });
  }

  getPlayer(): Observable<any> {
    return this.http.get<any>(this.route, { withCredentials: true });
  }

  upgradeStat(stat: string): Observable<any> {
    return this.http.put<any>(this.route, { stat }, { withCredentials: true });
  }
}