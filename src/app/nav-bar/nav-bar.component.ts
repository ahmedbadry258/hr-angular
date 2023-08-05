import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../user/auth.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  constructor(private router:Router,public  authService:AuthService,
    private messageService: MessageService){
  }
  ngOnInit(): void {

  }


  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }

get isMessageDisplayed(): boolean {
  return this.messageService.isDisplayed;
}
displayMessages(): void {
  this.router.navigate([{ outlets: { popup: ['messages'] } }]);
  this.messageService.isDisplayed = true;
}

hideMessages(): void {
  this.router.navigate([{ outlets: { popup: null } }]);
  this.messageService.isDisplayed = false;
}

}
