import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

export const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: 'bootstrap',
        loadComponent: () =>
            import('./bootstrap.component').then((m) => m.BootstrapComponent),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'explore',
        loadComponent: () =>
            import('./explore.component').then((m) => m.ExploreComponent),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'desks',
        loadComponent: () =>
            import('./desk-booking.component').then(
                (m) => m.DeskBookingComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'parking',
        loadComponent: () =>
            import('./parking.component').then((m) => m.ParkingComponent),
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];
