import { Routes } from '@angular/router';
import { LockerBookingsComponent } from './locker-bookings.component';
import { LockerListComponent } from './locker-list.component';
import { LockersComponent } from './lockers.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: LockersComponent,
        children: [
            {
                path: 'events',
                component: LockerBookingsComponent,
                title: 'Locker Bookings',
            },
            {
                path: 'manage',
                component: LockerListComponent,
                title: 'Locker Management',
            },
            { path: '**', redirectTo: 'events' },
        ],
    },
];
