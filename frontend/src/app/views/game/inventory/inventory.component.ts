import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ApiPlayerService } from '../api-player.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.scss',
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule]
  })

    export class InventoryComponent {
        public player: any;
    
        constructor(
            public router: Router,
            private apiPlayerService: ApiPlayerService 
        ) {
    
        }
    
        ngOnInit(): void {
            this.apiPlayerService.getPlayer().subscribe((data) => {
                console.log(data);
                if (!data) {
                    //create base player
                    this.apiPlayerService.createBasePlayer('colin31').subscribe((data) => {
                        this.player = data;
                    });
                }
                else {
                    this.player = data;
                }

            });           // this.apiPlayerService.createBasePlayer('colin31').subscribe((data) => {
           //     console.log(data);
           // });
        }

        upgradeStat(stat: string) {
            console.log(stat);
            this.apiPlayerService.upgradeStat(stat).subscribe((data) => {
                this.player = data;
            });
        }
        
    }