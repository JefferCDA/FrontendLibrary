import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  users = ['Jeffer', 'David', 'Camacho', 'De aguas'];
  userName = '';
  show = false;

  constructor() {
    setTimeout(() => {
      this.show=true
    }, 3000);
  }

  onAddUser() {
    this.users.push(this.userName);
  }
}
