import { Routes } from '@angular/router';
import { MainViewComponent } from './layout/main-view/main-view.component';

const routes: Routes = [
    {
        path: '',
        component: MainViewComponent,
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];

export default routes;
