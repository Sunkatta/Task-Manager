import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';
import routes from './routes';

@NgModule({
  declarations: [UsersListComponent, UserCardComponent, UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TooltipModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
