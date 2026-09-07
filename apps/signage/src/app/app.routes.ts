import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';

const loadSignageTemplate = () =>
    import('./template.component').then((m) => m.SignageTemplateComponent);

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
        path: 'signage',
        loadComponent: loadSignageTemplate,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'signage/:system_id',
        loadComponent: loadSignageTemplate,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'template/:template_id/:system_id',
        loadComponent: loadSignageTemplate,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'template/:template_id',
        loadComponent: loadSignageTemplate,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];
