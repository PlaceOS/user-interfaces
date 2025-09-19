import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LockerBookingsComponent } from './locker-bookings.component';
import { LockersTopbarComponent } from './locker-topbar.component';

import { LockerListComponent } from './locker-list.component';
import { LockersComponent } from './lockers.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: LockersComponent,
        children: [
            { path: 'events', component: LockerBookingsComponent },
            { path: 'manage', component: LockerListComponent },
            { path: '**', redirectTo: 'events' },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [
        LockersComponent,
        LockerBookingsComponent,
        LockersTopbarComponent,
        LockerListComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class LockersModule {}
