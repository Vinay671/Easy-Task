import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  curruser: any = this.users[0];

  onSelectUser(id: string) {
    console.log('selected user with id ' + id);
    this.curruser = this.users.find((u) => u.id == id);
  }
}
