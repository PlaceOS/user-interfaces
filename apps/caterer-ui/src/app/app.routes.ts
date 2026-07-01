import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { CateringComponent } from './catering.component';

export const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: '',
        component: CateringComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: ':view',
        component: CateringComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '' },
];
