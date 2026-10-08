import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

export const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'bootstrap',
        loadComponent: () =>
            import('./bootstrap.component').then((m) => m.BootstrapComponent),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'welcome',
        loadComponent: () =>
            import('./welcome.component').then((m) => m.WelcomeComponent),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./visitor-registration.component').then(
                (m) => m.VisitorRegistrationComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'explore',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () => import('./explore.routes').then((m) => m.ROUTES),
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
