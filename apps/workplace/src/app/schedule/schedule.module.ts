import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedUsersModule } from '@placeos/users';
import { SharedComponentModule } from '../components/shared.module';
import { ScheduleListItemComponent } from './schedule-list-item.component';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleViewBookingComponent } from './schedule-view-booking.component';
import { ScheduleViewEventComponent } from './schedule-view-event.component';
import { ScheduleComponent } from './schedule.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: ScheduleComponent,
        children: [
            { path: '', component: ScheduleListComponent },
            { path: 'view/:id/booking', component: ScheduleViewBookingComponent },
            { path: 'view/:id/event', component: ScheduleViewEventComponent },
        ],
    },
    { path: '*', redirectTo: '' },
];

@NgModule({
    declarations: [
        ScheduleComponent,
        ScheduleListComponent,
        ScheduleListItemComponent,
        ScheduleViewBookingComponent,
        ScheduleViewEventComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        SharedUsersModule,
        ScrollingModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppScheduleModule {}
