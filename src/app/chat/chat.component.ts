import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() userAuth: string;
  messages: Observable<Message[]>;
  private msgRef: AngularFirestoreCollection<Message>;

constructor(private db: AngularFirestore) {
  this.msgRef = db.collection<Message>('messages', ref => ref.orderBy('timestamp'));
}
  ngOnInit() {
    this.messages = this.msgRef.valueChanges();
  }

}
