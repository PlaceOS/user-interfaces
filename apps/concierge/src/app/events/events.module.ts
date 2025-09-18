import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

import { UIModule } from '../ui/ui.module';
import { EventManageComponent } from './event-manage.component';
import { EventsListComponent } from './events-list.component';

import { SharedBookingsModule } from 'libs/bookings/src/lib/bookings.module';
import { SharedEventsModule } from 'libs/events/src/lib/events.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';
import { EventCalendarComponent } from './event-calendar.component';
import { EventListingComponent } from './event-listing.component';
import { EventMonthViewComponent } from './event-month-view.component';
import { EventWeekViewComponent } from './event-week-view.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: EventsComponent,
        children: [{ path: '', component: EventsListComponent }],
    },
    { path: 'manage', component: EventManageComponent },
    { path: 'manage/:id', component: EventManageComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [
        EventsComponent,
        EventsListComponent,
        EventManageComponent,
        EventListingComponent,
        EventCalendarComponent,
        EventWeekViewComponent,
        EventMonthViewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedBookingsModule,
        SharedEventsModule,
        FormFieldsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class EventsModule {}
