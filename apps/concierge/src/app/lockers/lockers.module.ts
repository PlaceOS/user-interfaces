import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LockerBookingsComponent } from './locker-bookings.component';

import { LockerListComponent } from './locker-list.component';
import { LockersComponent } from './lockers.component';

const ROUTES: Route[] = [
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

@NgModule({
    declarations: [],
    imports: [
        LockersComponent,
        LockerBookingsComponent,
        LockerListComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class LockersModule {}
