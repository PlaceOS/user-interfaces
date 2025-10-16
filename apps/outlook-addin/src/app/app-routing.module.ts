import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisedUserGuard } from '@placeos/components';

import { UnauthorisedComponent } from '@placeos/components';
import { DeskBookingComponent } from './desks/desk-booking.component';
import { DeskBookingSuccessComponent } from './desks/desk-success.component';
import { MeetingBookingComponent } from './meetings/meeting-booking.component';
import { MeetingBookingSuccessComponent } from './meetings/meeting-success.component';
import { NotFoundComponent } from './not-found.component';
import { BookingConfirmedComponent } from './rooms/booking-confirmed.component';
import { FindSpaceComponent } from './rooms/find-space.component';
import { RoomBookingComponent } from './rooms/room-booking.component';
import { UpcomingBookingsComponent } from './rooms/upcoming-bookings.component';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    { path: '404', component: NotFoundComponent },
    {
        path: '',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        children: [
            {
                path: 'ms-auth',
                component: RoomBookingComponent,
            },
            {
                path: 'book',
                children: [
                    { path: 'spaces', component: RoomBookingComponent },
                    {
                        path: 'spaces/success',
                        component: BookingConfirmedComponent,
                    },
                    { path: 'meeting', component: MeetingBookingComponent },
                    {
                        path: 'meeting/success',
                        component: MeetingBookingSuccessComponent,
                    },
                    { path: 'desks', component: DeskBookingComponent },
                    {
                        path: 'desks/success',
                        component: DeskBookingSuccessComponent,
                    },
                ],
            },
            {
                path: 'schedule/view',
                component: FindSpaceComponent,
            },
            {
                path: 'confirm/success',
                component: BookingConfirmedComponent,
            },
            {
                path: 'upcoming',
                component: UpcomingBookingsComponent,
            },
            { path: '**', redirectTo: 'book/meeting' },
        ],
    },
    { path: '**', redirectTo: 'book/meeting', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
