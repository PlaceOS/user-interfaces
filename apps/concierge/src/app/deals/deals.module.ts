import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DealsComponent } from './deals.component';

import { UIModule } from '../ui/ui.module';
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

const COMPONENTS = [
    DealsListComponent,
    DealsManageComponent,
    DealModalComponent,
];

@NgModule({
    declarations: [DealsComponent],
    imports: [
        CommonModule,
        UIModule,
        ...COMPONENTS,
        RouterModule.forChild(ROUTES),
    ],
})
export class DealsModule {}
