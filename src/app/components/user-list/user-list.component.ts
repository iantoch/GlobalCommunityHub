import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: `./user-list.component.html`,
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUser: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
