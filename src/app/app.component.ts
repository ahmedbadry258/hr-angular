import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent {
  title = 'human-resource-management-system';
  constructor(private spinner: NgxSpinnerService,
    private messageService: MessageService){}
  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }
}
