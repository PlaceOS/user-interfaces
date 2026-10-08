import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

/** Lazy load the catering views so their Material and catering code stays out of the initial bundle */
const loadCatering = () =>
    import('./catering.component').then((m) => m.CateringComponent);

export const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: '',
        loadComponent: loadCatering,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: ':view',
        loadComponent: loadCatering,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '' },
];
