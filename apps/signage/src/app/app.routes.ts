import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';
import { SignagePanelComponent } from './signage.component';
import { SignageTemplateComponent } from './template.component';

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
        component: SignagePanelComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'signage/:system_id',
        component: SignagePanelComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'template/:template_id/:system_id',
        component: SignageTemplateComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'template/:template_id',
        component: SignageTemplateComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];
