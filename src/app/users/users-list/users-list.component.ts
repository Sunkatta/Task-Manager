import { Component, OnInit } from '@angular/core';
import User from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
  }

  onItemDeleted(index: number): void {
    this.users.splice(index, 1);
  }
}
