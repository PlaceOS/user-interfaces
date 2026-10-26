import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';

export const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
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
