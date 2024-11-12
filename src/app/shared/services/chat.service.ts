import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: WebSocketSubject<any> = webSocket(
    'wss://ws.postman-echo.com/raw'
  );

  sendMessage(message: any) {
    const payload = JSON.stringify({ message });
    this.socket.next({ message });
  }

  getMessages(): Observable<{ sender: string; message: string }> {
    return this.socket.asObservable().pipe(
      map((response) => {
        return {
          sender: 'Bot',
          message: response.message || 'Echo response',
        };
      })
    );
  }
}
