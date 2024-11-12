import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: { sender: string; message: string }[] = [];
  message: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe((msg) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.messages.push({ sender: 'User', message: this.message });
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
