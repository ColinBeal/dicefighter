import { Routes } from '@angular/router';
import { SigninComponent } from './views/auth/signin/signin.component';
import { LoginComponent } from './views/auth/login/login.component';
import { CombatComponent } from './views/combat/combat.component';
import { ShipSelectionComponent } from './views/ship-selection/ship-selection.component';

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
        path: 'combat',
        component: CombatComponent,
    },
    {
        path: 'ship-selection',
        component: ShipSelectionComponent,
    }
];
