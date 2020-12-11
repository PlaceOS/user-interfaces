import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

import { ROUTES } from './schedule.routes';
import { SharedContentModule } from '../ui/shared.module';

import { ScheduleComponent } from './schedule.component';
import { ScheduleEventViewComponent } from './event-list/event-view.component';
import { ScheduleViewEventComponent } from './view-event/view-event.component';
import { ScheduleEventListItemComponent } from './event-list/event-list-item.component';
import { EventDetailsComponent } from './view-event/event-details/event-details.component';
import { EventEditComponent } from './view-event/event-edit/event-edit.component';
import { BookingDetailsComponent } from './view-event/booking-details/booking-details.component';
import { ScheduleEventListComponent } from './event-list/event-list.component'

@NgModule({
    declarations: [
        ScheduleComponent,
        ScheduleViewEventComponent,
        ScheduleEventViewComponent,
        ScheduleEventListComponent,
        ScheduleEventListItemComponent,
        EventDetailsComponent,
        EventEditComponent,
        BookingDetailsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        ScrollingModule,
    ],
})
export class ScheduleModule {}
