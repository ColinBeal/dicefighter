import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private route = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.route + '/login', { username, password });
  }


  signup(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.route + '/signup', { username, password });
  }
}