import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

import { BootstrapComponent } from './bootstrap.component';
import { CheckinViewComponent } from './checkin/checkin-view.component';
import { EventPanelComponent } from './event-panel.component';
import { PanelViewComponent } from './new-panel/panel-view.component';

export const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'panel/:system_id',
        component: PanelViewComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'checkin/:system_id',
        component: CheckinViewComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'events/:system_id',
        component: EventPanelComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];
