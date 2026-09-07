import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

import { BootstrapComponent } from './bootstrap.component';

export const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'panel/:system_id',
        loadComponent: () =>
            import('./new-panel/panel-view.component').then(
                (m) => m.PanelViewComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'checkin/:system_id',
        loadComponent: () =>
            import('./checkin/checkin-view.component').then(
                (m) => m.CheckinViewComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'events/:system_id',
        loadComponent: () =>
            import('./event-panel.component').then(
                (m) => m.EventPanelComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];
