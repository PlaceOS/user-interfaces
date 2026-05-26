import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts.component';
import { AnalyticsComponent } from './analytics.component';
import { RemoteSupportComponent } from './remote-support.component';

import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { DashboardAlertListComponent } from './dashboards/dashboard-alert-list.component';
import { DashboardAlertManageComponent } from './dashboards/dashboard-alert-manage.component';
import { DashboardListComponent } from './dashboards/dashboard-list.component';
import { DashboardManageComponent } from './dashboards/dashboard-mange.component';
import { DashboardViewComponent } from './dashboards/dashboard-view.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { RecorderGridViewComponent } from './recorder-view.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: 'alerts',
        component: AlertsComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'alerts/:id',
        component: AlertsComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'remote-support',
        component: RemoteSupportComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'analytics',
        component: AnalyticsComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'dashboards',
        component: DashboardsComponent,
        canActivate: [AuthorisedUserGuard],
        children: [
            { path: 'list', component: DashboardListComponent },
            { path: ':id/alerts', component: DashboardAlertListComponent },
            {
                path: ':id/alerts/manage',
                component: DashboardAlertManageComponent,
            },
            {
                path: ':id/alerts/manage/:alert_id',
                component: DashboardAlertManageComponent,
            },
            { path: 'manage', component: DashboardManageComponent },
            { path: 'manage/:id', component: DashboardManageComponent },
            { path: 'view/:id', component: DashboardViewComponent },
            { path: '**', redirectTo: 'list' },
        ],
    },
    {
        path: 'recorder-grid',
        component: RecorderGridViewComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'alerts' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
