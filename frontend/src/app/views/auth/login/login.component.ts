import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../api-auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule]
  })

    export class LoginComponent {
        public username: string;
        public password: string;
        public logInForm: FormGroup;
    
        constructor(private apiAuthService: AuthService, public router: Router) {
    
        }
    
        ngOnInit(): void {
            this.logInForm = new FormGroup({
                username: new FormControl(''),
                password: new FormControl(''),
            });
        }
        
        login() {
            const { username, password } = this.logInForm.value;
            this.apiAuthService.login(username, password).subscribe({
                next: (v) => console.log(v),
                error: (error) => console.error(error),
                complete: () => console.info('complete')
            });
        }
    }