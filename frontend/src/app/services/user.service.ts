import { Subject } from 'rxjs';
import { IUser } from '../../../../shared/interfaces/user.interface';

import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
  })

  export class UserService {
    public user: IUser;
    public userSubject = new Subject<IUser>();

    constructor() { }

    public setUser(user: IUser) {
        this.user = user;
        this.userSubject.next(user);
    }
} 