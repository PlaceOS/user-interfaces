import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DealsComponent } from './deals.component';

import { DealModalComponent } from './deal-modal.component';
import { DealsListComponent } from './deals-list.component';
import { DealsManageComponent } from './deals-manage.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: DealsComponent,
        children: [{ path: '', component: DealsListComponent }],
    },
    { path: 'manage', component: DealsManageComponent },
    { path: 'manage/:id', component: DealsManageComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [
        DealsListComponent,
        DealsManageComponent,
        DealModalComponent,
        DealsComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class DealsModule {}
