import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ParkingBookingsListComponent } from './parking-bookings-list.component';
import { ParkingMapComponent } from './parking-map.component';
import { ParkingRequestsListComponent } from './parking-requests-list.component';
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
                    { path: 'map', component: ParkingMapComponent },
                    {
                        path: 'requests',
                        component: ParkingRequestsListComponent,
                    },
                    {
                        path: 'bookings',
                        component: ParkingBookingsListComponent,
                    },
                    { path: 'list', redirectTo: 'bookings' },
                    { path: '**', redirectTo: 'bookings' },
                ],
            },
            {
                path: 'manage',
                children: [
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
        ParkingRequestsListComponent,
        ParkingSpaceListComponent,
        ParkingUsersListComponent,
        ParkingMapComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppParkingModule {}
