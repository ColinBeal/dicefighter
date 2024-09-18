import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../../../shared/interfaces/user.interface';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'lootrpg';

  public user: IUser;
  public userSubscription: Subscription;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

