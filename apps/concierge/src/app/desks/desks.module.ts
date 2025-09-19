import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DeskBookingsComponent } from './desk-bookings.component';
import { DeskMapViewComponent } from './desk-map-view.component';
import { DesksManageComponent } from './desks-manage.component';

import { DesksComponent } from './desks.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: DesksComponent,
        children: [
            { path: 'events', component: DeskBookingsComponent },
            { path: 'map', component: DeskMapViewComponent },
            { path: 'manage', component: DesksManageComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [
        DesksComponent,
        DeskBookingsComponent,
        DeskMapViewComponent,
        DesksManageComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class DesksModule {}
