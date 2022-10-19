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
        ],
    },
    { path: '**', pathMatch: 'full', redirectTo: '/book/spaces' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
