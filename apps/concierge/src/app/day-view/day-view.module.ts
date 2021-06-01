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

import { BookingModalComponent } from './booking-modal.component';
import { EventFormComponent } from './event-form.component';
import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

const ROUTES: Route[] = [{ path: '', component: DayViewComponent }];

@NgModule({
    declarations: [
        DayViewComponent,
        DayviewTopbarComponent,
        DayviewTimelineComponent,
        DayviewSpaceComponent,
        DayviewEventComponent,

        BookingModalComponent,
        EventFormComponent
    ],
    imports: [CommonModule, FormsModule, UIModule, SharedSpacesModule, SharedUsersModule, RouterModule.forChild(ROUTES)],
})
export class DayViewModule {}
