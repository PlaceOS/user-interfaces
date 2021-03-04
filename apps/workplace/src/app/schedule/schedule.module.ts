import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedContentModule } from '../ui/shared.module';
import { ScheduleEventListItemComponent } from './event-list/event-list-item.component';
import { ScheduleEventListComponent } from './event-list/event-list.component';
import { ScheduleEventViewComponent } from './event-list/event-view.component';
import { ScheduleComponent } from './schedule.component';
import { ROUTES } from './schedule.routes';
import { BookingDetailsComponent } from './view-event/booking-details.component';
import { EventDetailsComponent } from './view-event/event-details.component';
import { EventEditComponent } from './view-event/event-edit.component';
import { ScheduleViewEventComponent } from './view-event/view-event.component';

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
