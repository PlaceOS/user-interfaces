import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { DayViewComponent } from './day-view.component';
import { DayviewTopbarComponent } from './dayview-topbar.component';
import { DayviewTimelineComponent } from './dayview-timeline.component';
import { DayviewSpaceComponent } from './dayview-space.component';
import { DayviewEventComponent } from './dayview-event.component';
import { DayviewEventDetailsComponent } from './dayview-event-details.component';

import { BookingModalComponent } from './booking-modal.component';
import { EventFormComponent } from './event-form.component';
import { SharedSpacesModule } from '@user-interfaces/spaces';
import { SharedUsersModule } from '@user-interfaces/users';

const ROUTES: Route[] = [{ path: '', component: DayViewComponent }];

@NgModule({
    declarations: [
        DayViewComponent,
        DayviewTopbarComponent,
        DayviewTimelineComponent,
        DayviewSpaceComponent,
        DayviewEventComponent,
        DayviewEventDetailsComponent,

        BookingModalComponent,
        EventFormComponent
    ],
    imports: [CommonModule, FormsModule, UIModule, SharedSpacesModule, SharedUsersModule, RouterModule.forChild(ROUTES)],
})
export class DayViewModule {}
