import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getUserImage(): string {
    return this.user.picture + '?random=' + this.index;
  }

  onDeleteClicked() {
    this.delete.emit(this.index);
  }
}
