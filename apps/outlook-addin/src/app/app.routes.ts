import { Routes } from '@angular/router';
import { AuthorisedUserGuard } from '@placeos/components';

import { UnauthorisedComponent } from '@placeos/components';

export const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: '404',
        loadComponent: () =>
            import('./not-found.component').then((m) => m.NotFoundComponent),
    },
    {
        path: 'find',
        loadComponent: () =>
            import('./rooms/find-space.component').then(
                (m) => m.FindSpaceComponent,
            ),
    },
    {
        path: '',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        children: [
            {
                path: 'ms-auth',
                loadComponent: () =>
                    import('./rooms/room-booking.component').then(
                        (m) => m.RoomBookingComponent,
                    ),
            },
            {
                path: 'book',
                children: [
                    {
                        path: 'spaces',
                        loadComponent: () =>
                            import('./rooms/room-booking.component').then(
                                (m) => m.RoomBookingComponent,
                            ),
                    },
                    {
                        path: 'spaces/success',
                        loadComponent: () =>
                            import('./rooms/booking-confirmed.component').then(
                                (m) => m.BookingConfirmedComponent,
                            ),
                    },
                    {
                        path: 'meeting',
                        loadComponent: () =>
                            import('./meetings/meeting-booking.component').then(
                                (m) => m.MeetingBookingComponent,
                            ),
                    },
                    {
                        path: 'meeting/success',
                        loadComponent: () =>
                            import('./meetings/meeting-success.component').then(
                                (m) => m.MeetingBookingSuccessComponent,
                            ),
                    },
                    {
                        path: 'desks',
                        loadComponent: () =>
                            import('./desks/desk-booking.component').then(
                                (m) => m.DeskBookingComponent,
                            ),
                    },
                    {
                        path: 'desks/success',
                        loadComponent: () =>
                            import('./desks/desk-success.component').then(
                                (m) => m.DeskBookingSuccessComponent,
                            ),
                    },
                ],
            },
            {
                path: 'schedule/view',
                loadComponent: () =>
                    import('./rooms/find-space.component').then(
                        (m) => m.FindSpaceComponent,
                    ),
            },
            {
                path: 'confirm/success',
                loadComponent: () =>
                    import('./rooms/booking-confirmed.component').then(
                        (m) => m.BookingConfirmedComponent,
                    ),
            },
            {
                path: 'upcoming',
                loadComponent: () =>
                    import('./rooms/upcoming-bookings.component').then(
                        (m) => m.UpcomingBookingsComponent,
                    ),
            },
            { path: '**', redirectTo: 'book/meeting' },
        ],
    },
    { path: '**', redirectTo: 'book/meeting', pathMatch: 'full' },
];
