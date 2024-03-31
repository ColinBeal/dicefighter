import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../api-auth.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.scss',
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule]
  })

    export class SigninComponent {
        public username: string;
        public password: string;
        
        public signInForm: FormGroup;
    
        constructor(private apiAuthService: AuthService, public router: Router) {
    
        }
    
        ngOnInit(): void {
            console.log('SigninComponent initialized');
            this.signInForm = new FormGroup({
                username: new FormControl(''),
                password: new FormControl(''),
            });
        }
    
        register() {
            const { username, password } = this.signInForm.value;
            this.apiAuthService.signup(username, password).subscribe({
                next: (v) => console.log(v),
                error: (error) => console.error(error),
                complete: () => console.info('complete')
            });
        }
    }