import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiShipSelectionService } from './api-ship-selection.service';
import { IExtendedBaseShip } from '../../interfaces/base-ship.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './ship-selection.component.html',
    styleUrl: './ship-selection.component.scss',
    imports: [CommonModule]
  })

  export class ShipSelectionComponent implements OnInit {
    public baseShips: IExtendedBaseShip[] = [];
    constructor(private shipSelectionService: ApiShipSelectionService
    ) {}

    ngOnInit(): void {
      this.fetchBaseShips();
    }

    fetchBaseShips() {
      this.shipSelectionService.getBaseShips().subscribe({
        next: (response) => {

          for (const ship of response.data) {
            const readableShipName = ship.name.replace(/[^a-zA-Z0-9]/g, '');
            this.baseShips.push({
              ...ship,
              imagePath: `assets/png/ships/${readableShipName.toUpperCase()}.png`
            });
          }
          
          console.log(this.baseShips); // replace with your own code to handle the BaseShip data
        },
        error: (error) => console.error(error)
      });
      this.shipSelectionService.getUserShips().subscribe({
        next: (response) => {

          for (const ship of response.data) {
            console.log(ship);
          }
        },
        error: (error) => console.error(error)
      });
    }

    selectShip(ship: IExtendedBaseShip) {
      this.shipSelectionService.createShipFromBaseShip(ship._id, 'Dummy Ship Name').subscribe({
        next: (response) => console.log(response), // replace with your own code to handle the created Ship data
        error: (error) => console.error(error)
      });
    }
  }