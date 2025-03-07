import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

import { WeekViewDayComponent } from './week-view-day.component';
import { WeekViewEventComponent } from './week-view-event.component';
import { WeekViewTimelineComponent } from './week-view-timeline.component';
import { WeekViewTopbarComponent } from './week-view-topbar.component';
import { WeekViewComponent } from './week-view.component';

const ROUTES: Route[] = [
    { path: '', component: WeekViewComponent },
    { path: 'new', component: WeekViewComponent },
];

@NgModule({
    declarations: [
        WeekViewComponent,
        WeekViewTopbarComponent,
        WeekViewTimelineComponent,
        WeekViewDayComponent,
        WeekViewEventComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class WeekViewModule {}
