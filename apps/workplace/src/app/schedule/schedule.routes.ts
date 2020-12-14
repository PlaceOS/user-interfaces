import { Routes } from '@angular/router';
import { ScheduleEventViewComponent } from './event-list/event-view.component';

import { ScheduleComponent } from './schedule.component';
import { ScheduleViewEventComponent } from './view-event/view-event.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: ScheduleComponent,
        children: [
            { path: 'listing', component: ScheduleEventViewComponent },
            { path: 'view/:id', component: ScheduleViewEventComponent },
            { path: '**', redirectTo: 'listing' },
        ],
    },
    { path: '**', redirectTo: '' },
];
