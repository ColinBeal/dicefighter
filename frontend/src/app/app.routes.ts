import { Routes } from '@angular/router';
import { SigninComponent } from './views/auth/signin/signin.component';
import { LoginComponent } from './views/auth/login/login.component';
import { GameComponent } from './views/game/game.component';
import { InventoryComponent } from './views/game/inventory/inventory.component';
import { DungeonComponent } from './views/game/dungeon/dungeon.component';
import { ChatComponent } from './views/chat/chat.component';

export const routes: Routes = [
    {
        path: 'auth',
        redirectTo: 'auth/signin',
    },
    {    
        path: 'auth',
        children: [
            {
                path: 'signin',
                component: SigninComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            }
        ]
    },
    {
        path: 'game',
        redirectTo: 'game/inventory',
    },
    {
        path: 'audio',
        component: ChatComponent,
    },
    {    
        path: 'game',
        component: GameComponent,
        children: [
            {
                path: 'inventory',
                component: InventoryComponent,
            },
            {
                path: 'dungeon',
                component: DungeonComponent,
            }            
        ]
    },
    
];
