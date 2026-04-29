import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DayViewComponent } from './day-view.component';

const ROUTES: Route[] = [
    { path: '', component: DayViewComponent, title: 'Room Bookings' },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [DayViewComponent, RouterModule.forChild(ROUTES)],
})
export class DayViewModule {}
