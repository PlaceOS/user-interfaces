import { Routes } from '@angular/router';
import { DayViewComponent } from './day-view.component';

export const ROUTES: Routes = [
    { path: '', component: DayViewComponent, title: 'Room Bookings' },
    { path: '**', redirectTo: '' },
];
