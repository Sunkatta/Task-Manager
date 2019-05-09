import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title: string = 'lesson-one';
  Person = {
    firstName: "Lusian",
    lastName: "Manolov"
  };

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor() {
    this.title = 'New Title';
  }

  ngOnInit() {

  }

  ngDoCheck() {
    console.log('DoCheck initiated');
  }

  getText(): string {
    this.title = 'Second Title';
    return this.title;
  }
}
