import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseShip } from '../../interfaces/base-ship.interface';
import { IResponse } from '../../interfaces/response.interface';
import { IShip } from '../../interfaces/player-ship.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiShipSelectionService {
  private route = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBaseShips(): Observable<IResponse<IBaseShip[]>> {
    return this.http.get<any>(this.route + '/base-ship'); // replace with the actual API endpoint
  }

  getUserShips(): Observable<IResponse<IBaseShip[]>> {
    return this.http.get<any>(this.route + '/ship', { withCredentials: true }); // replace with the actual API endpoint
  }

  createShipFromBaseShip(baseShipId: string, shipName: string): Observable<IResponse<IShip>> {
    return this.http.post<any>(this.route + '/ship', { 
        baseShipId: baseShipId, 
        shipName: 'Dummy Ship Name'
     }, { withCredentials: true }); // replace with the actual API endpoint
  }
}