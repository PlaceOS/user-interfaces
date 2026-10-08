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
        path: 'panel/:system_id',
        loadComponent: () =>
            import('./panel-view.component').then((m) => m.PanelViewComponent),
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];
