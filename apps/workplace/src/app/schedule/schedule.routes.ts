import { Routes } from '@angular/router';

import { ScheduleComponent } from './schedule.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: ScheduleComponent,
        title: 'Your Bookings',
    },
    { path: '**', redirectTo: '' },
];
