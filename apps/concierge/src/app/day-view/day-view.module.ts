import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { DayviewEventComponent } from './dayview-event.component';
import { DayviewSpaceComponent } from './dayview-space.component';
import { DayviewTimelineComponent } from './dayview-timeline.component';
import { DayviewTopbarComponent } from './dayview-topbar.component';

import { MeetingFormDetailsComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-form-details.component';
import { SharedCateringModule } from 'libs/catering/src/lib/catering.module';
import { SharedUsersModule } from 'libs/users/src/lib/users.module';
import { BookingModalComponent } from './booking-modal.component';
import { DayViewComponent } from './day-view.component';
import { EventBookModalComponent } from './event-book-modal.component';
import { EventFormComponent } from './event-form.component';
import { RoomBookingsApprovalsComponent } from './room-approvals.component';
import { RoomBookingSearchComponent } from './room-booking-search.component';
import { RoomBookingsComponent } from './room-bookings.component';
import { RoomBookingsTimelineComponent } from './room-timeline.component';
import { RoomWeekBookingsTimelineComponent } from './room-week-timeline.component';

const ROUTES: Route[] = [
    { path: '', component: DayViewComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [
        DayviewTopbarComponent,
        DayviewTimelineComponent,
        DayviewSpaceComponent,
        DayviewEventComponent,
        DayViewComponent,

        BookingModalComponent,
        EventFormComponent,

        RoomBookingsComponent,
        RoomBookingsTimelineComponent,
        RoomBookingsApprovalsComponent,
        RoomBookingSearchComponent,
        EventBookModalComponent,
        MeetingFormDetailsComponent,
        RoomWeekBookingsTimelineComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedUsersModule,
        SharedCateringModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DayViewModule {}
