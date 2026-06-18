import { Routes } from '@angular/router';

import { DirectoryUserListComponent } from './user-list.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: DirectoryUserListComponent,
        title: 'Directory',
    },
];
