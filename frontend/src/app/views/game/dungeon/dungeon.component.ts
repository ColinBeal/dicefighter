import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiDungeonService } from '../services/api-dungeon.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './dungeon.component.html',
    styleUrl: './dungeon.component.scss',
    imports: [CommonModule, RouterOutlet]
  })

    export class DungeonComponent {
        dungeon: string[][];

        constructor(private dungeonService: ApiDungeonService) {}

        ngOnInit(): void {
            this.dungeonService.getDungeon().subscribe(data => {
                this.dungeon = data;
            });
        }
   }