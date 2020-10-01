import { Routes } from '@angular/router';

import { ScheduleComponent } from './schedule.component';

export const ROUTES: Routes = [
    { path: '', component: ScheduleComponent },
    { path: ':page', component: ScheduleComponent },
    { path: ':page/:id', component: ScheduleComponent },
    { path: '**', redirectTo: '' }
];
