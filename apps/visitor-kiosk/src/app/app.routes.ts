import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

import { BootstrapComponent } from './bootstrap.component';
import { VisitorRegistrationComponent } from './visitor-registration.component';
import { WelcomeComponent } from './welcome.component';

export const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'register',
        component: VisitorRegistrationComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'explore',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./explore.routes').then((m) => m.ROUTES),
    },
    {
        path: 'checkin',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./checkin/checkin.routes').then((m) => m.ROUTES),
    },
    {
        path: 'checkout',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./checkin/checkout.routes').then((m) => m.ROUTES),
    },
    { path: '**', redirectTo: 'bootstrap' },
];
