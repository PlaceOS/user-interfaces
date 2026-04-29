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
            {
                path: 'events',
                component: DeskBookingsComponent,
                title: 'Desk Bookings',
            },
            { path: 'map', component: DeskMapViewComponent, title: 'Desk Map' },
            {
                path: 'manage',
                component: DesksManageComponent,
                title: 'Desk Management',
            },
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
