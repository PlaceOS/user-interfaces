import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';
import { DeskBookingComponent } from './desk-booking.component';
import { ExploreComponent } from './explore.component';
import { ParkingComponent } from './parking.component';

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
        component: ExploreComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'desks',
        component: DeskBookingComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'parking',
        component: ParkingComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];
