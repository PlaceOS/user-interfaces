import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindSpaceComponent } from './rooms/find-space/find-space.component';
import { RoomBookingComponent } from './rooms/room-booking.component';
import { BookingConfirmedComponent } from './rooms/booking-confirmed/booking-confirmed.component';
import { UpcomingBookingsComponent } from './rooms/upcoming-bookings/upcoming-bookings.component';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeskBookingComponent } from './desks/desk-booking.component';
import { DeskBookingSuccessComponent } from './desks/desk-success.component';
import { MeetingBookingComponent } from './meetings/meeting-booking.component';
import { MeetingBookingSuccessComponent } from './meetings/meeting-success.component';

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
                    { path: 'spaces/success', component: BookingConfirmedComponent },
                    { path: 'meeting', component: MeetingBookingComponent },
                    { path: 'meeting/success', component: MeetingBookingSuccessComponent },
                    { path: 'desks', component: DeskBookingComponent },
                    { path: 'desks/success', component: DeskBookingSuccessComponent },
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
            { path: '**', pathMatch: 'full', redirectTo: '/book/meeting' },
        ],
    },
    { path: '**', pathMatch: 'full', redirectTo: '/book/meeting' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
