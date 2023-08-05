import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { User } from '../data/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User|null;
  redirectUrl: string='';

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }


  constructor(private messageService: MessageService) {
    this.currentUser={
      id: 0,
      userName: "",
      isAdmin: false,
    }
  }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true
      };
      this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: false
    };
    this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }

  logout(): void {
    this.currentUser = null;
  }
}
