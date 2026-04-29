import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DirectoryUserListComponent } from './user-list.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: DirectoryUserListComponent,
        title: 'Directory',
    },
];

@NgModule({
    declarations: [],
    imports: [DirectoryUserListComponent, RouterModule.forChild(ROUTES)],
})
export class DirectoryModule {}
