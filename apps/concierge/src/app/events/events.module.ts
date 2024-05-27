import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { EventsListComponent } from './events-list.component';
import { EventManageComponent } from './event-manage.component';
import { SharedSpacesModule } from '@placeos/spaces';

import { FormFieldsModule } from '@placeos/form-fields';
import { EventListingComponent } from './event-listing.component';
import { EventWeekViewComponent } from './event-week-view.component';
import { EventMonthViewComponent } from './event-month-view.component';
import { EventCalendarComponent } from './event-calendar.component';
import { SharedBookingsModule } from '@placeos/bookings';
import { SharedEventsModule } from '@placeos/events';

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
        SharedSpacesModule,
        SharedBookingsModule,
        SharedEventsModule,
        FormFieldsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class EventsModule {}
