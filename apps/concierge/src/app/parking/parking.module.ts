import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ParkingBookingsListComponent } from './parking-bookings-list.component';
import { ParkingFleetListComponent } from './parking-fleet-list.component';
import { ParkingMapComponent } from './parking-map.component';
import { ParkingSpaceListComponent } from './parking-space-list.component';
import { ParkingUsersListComponent } from './parking-users-list.component';
import { ParkingComponent } from './parking.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: ParkingComponent,
        children: [
            {
                path: 'events',
                children: [
                    { path: '', pathMatch: 'full', redirectTo: 'list' },
                    { path: 'map', component: ParkingMapComponent },
                    { path: 'list', component: ParkingBookingsListComponent },
                    {
                        path: 'requests',
                        component: ParkingBookingsListComponent,
                    },
                    {
                        path: 'bookings',
                        component: ParkingBookingsListComponent,
                    },
                    { path: '**', redirectTo: 'list' },
                ],
            },
            {
                path: 'manage',
                children: [
                    { path: 'fleet', component: ParkingFleetListComponent },
                    { path: 'users', component: ParkingUsersListComponent },
                    { path: 'map', component: ParkingMapComponent },
                    { path: 'spaces', component: ParkingSpaceListComponent },
                    { path: '**', redirectTo: 'spaces' },
                ],
            },
            { path: '**', redirectTo: 'events' },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [
        ParkingComponent,
        ParkingBookingsListComponent,
        ParkingFleetListComponent,
        ParkingSpaceListComponent,
        ParkingUsersListComponent,
        ParkingMapComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppParkingModule {}
