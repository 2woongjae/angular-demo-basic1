import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [];

  constructor(private userService: UserService) {
    this.userService.getUsers()
    .then(data => {
      this.users = data.json();
    })
    .catch(error => {
      console.log(error);
      this.users = [];
    });
  }
}
