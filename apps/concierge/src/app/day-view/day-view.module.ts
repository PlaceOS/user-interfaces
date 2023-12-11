import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { DayViewComponent } from './day-view.component';
import { DayviewTopbarComponent } from './dayview-topbar.component';
import { DayviewTimelineComponent } from './dayview-timeline.component';
import { DayviewSpaceComponent } from './dayview-space.component';
import { DayviewEventComponent } from './dayview-event.component';

import { BookingModalComponent } from './booking-modal.component';
import { EventFormComponent } from './event-form.component';
import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';
import { SharedCateringModule } from '@placeos/catering';
import { RoomBookingsComponent } from './room-bookings.component';
import { RoomBookingsTimelineComponent } from './room-timeline.component';
import { RoomBookingsApprovalsComponent } from './room-approvals.component';
import { NewDayViewComponent } from './new-dayview.component';
import { MeetingFormDetailsComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-form-details.component';
import { EventBookModalComponent } from './event-book-modal.component';

const ROUTES: Route[] = [
    { path: '', component: DayViewComponent },
    { path: 'new', component: NewDayViewComponent },
];

@NgModule({
    declarations: [
        DayViewComponent,
        DayviewTopbarComponent,
        DayviewTimelineComponent,
        DayviewSpaceComponent,
        DayviewEventComponent,
        NewDayViewComponent,

        BookingModalComponent,
        EventFormComponent,

        RoomBookingsComponent,
        RoomBookingsTimelineComponent,
        RoomBookingsApprovalsComponent,
        EventBookModalComponent,
        MeetingFormDetailsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        SharedCateringModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class DayViewModule {}
