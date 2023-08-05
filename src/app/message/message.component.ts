import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: ['.message-row { margin-bottom: 10px }']
})
export class MessageComponent {
  get messages() {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService,
              private router: Router) { }

              close(): void {
                // Close the popup.
                this.router.navigate([{ outlets: { popup: null } }]);
                this.messageService.isDisplayed = false;
}
}
