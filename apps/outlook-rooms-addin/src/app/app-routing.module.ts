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

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'ms-auth',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: RoomBookingComponent,
    },
    {
        path: 'book/spaces',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: RoomBookingComponent,
    },
    {
        path: 'book/desks',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: DeskBookingComponent,
    },
    {
        path: 'schedule/view',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: FindSpaceComponent,
    },
    {
        path: 'confirm/success',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: BookingConfirmedComponent,
    },
    {
        path: 'upcoming',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        component: UpcomingBookingsComponent,
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/book/spaces' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
