import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardAvailabilityComponent } from './dashboard-availability/dashboard-availability.component';
import { RoomBookingComponent } from '../rooms/room-booking.component';
import { RoomDetailsComponent } from '../rooms/room-details/room-details.component';
import { RoomAttendeesComponent } from '../rooms/room-attendees/room-attendees.component';

const ROUTES: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardAvailabilityComponent,
        RoomBookingComponent,
        RoomDetailsComponent,
        RoomAttendeesComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
