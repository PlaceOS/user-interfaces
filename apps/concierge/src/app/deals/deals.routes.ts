import { Routes } from '@angular/router';
import { DealsComponent } from './deals.component';
import { DealsListComponent } from './deals-list.component';
import { DealsManageComponent } from './deals-manage.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: DealsComponent,
        children: [
            {
                path: '',
                component: DealsListComponent,
                title: 'Deals & Offers',
            },
        ],
    },
    { path: 'manage', component: DealsManageComponent, title: 'Manage Deal' },
    {
        path: 'manage/:id',
        component: DealsManageComponent,
        title: 'Manage Deal',
    },
    { path: '**', redirectTo: '' },
];
