import { Routes } from '@angular/router';
import { ParkingBookingsListComponent } from './parking-bookings-list.component';
import { ParkingFleetListComponent } from './parking-fleet-list.component';
import { ParkingMapComponent } from './parking-map.component';
import { ParkingSpaceListComponent } from './parking-space-list.component';
import { ParkingUsersListComponent } from './parking-users-list.component';
import { ParkingComponent } from './parking.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: ParkingComponent,
        children: [
            {
                path: 'events',
                children: [
                    { path: '', pathMatch: 'full', redirectTo: 'list' },
                    {
                        path: 'map',
                        component: ParkingMapComponent,
                        title: 'Parking Map',
                    },
                    {
                        path: 'list',
                        component: ParkingBookingsListComponent,
                        title: 'Parking Bookings',
                    },
                    {
                        path: 'requests',
                        component: ParkingBookingsListComponent,
                        title: 'Parking Requests',
                    },
                    {
                        path: 'bookings',
                        component: ParkingBookingsListComponent,
                        title: 'Parking Bookings',
                    },
                    { path: '**', redirectTo: 'list' },
                ],
            },
            {
                path: 'manage',
                children: [
                    {
                        path: 'fleet',
                        component: ParkingFleetListComponent,
                        title: 'Parking Fleet',
                    },
                    {
                        path: 'users',
                        component: ParkingUsersListComponent,
                        title: 'Parking Users',
                    },
                    {
                        path: 'map',
                        component: ParkingMapComponent,
                        title: 'Parking Map',
                    },
                    {
                        path: 'spaces',
                        component: ParkingSpaceListComponent,
                        title: 'Parking Spaces',
                    },
                    { path: '**', redirectTo: 'spaces' },
                ],
            },
            { path: '**', redirectTo: 'events' },
        ],
    },
    { path: '**', redirectTo: '' },
];
