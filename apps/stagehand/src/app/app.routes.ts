import { Routes } from '@angular/router';

import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { supportGroupsGuard } from './support-groups.guard';

/** Browser tab title of a page, so each page has a unique title */
const title = (page: string) => `${page} | Stagehand`;

export const routes: Routes = [
    {
        path: 'unauthorised',
        title: title('Unauthorised'),
        component: UnauthorisedComponent,
    },
    {
        path: 'alerts',
        title: title('Alerts'),
        loadComponent: () =>
            import('./alerts.component').then((m) => m.AlertsComponent),
        canActivate: [AuthorisedUserGuard, supportGroupsGuard],
    },
    {
        path: 'alerts/:id',
        title: title('Alerts'),
        loadComponent: () =>
            import('./alerts.component').then((m) => m.AlertsComponent),
        canActivate: [AuthorisedUserGuard, supportGroupsGuard],
    },
    {
        path: 'remote-support',
        title: title('Remote Support'),
        loadComponent: () =>
            import('./remote-support.component').then(
                (m) => m.RemoteSupportComponent,
            ),
        canActivate: [AuthorisedUserGuard, supportGroupsGuard],
    },
    {
        path: 'analytics',
        title: title('Analytics'),
        loadComponent: () =>
            import('./analytics.component').then((m) => m.AnalyticsComponent),
        canActivate: [AuthorisedUserGuard, supportGroupsGuard],
    },
    {
        path: 'dashboards',
        title: title('Dashboards'),
        loadComponent: () =>
            import('./dashboards/dashboards.component').then(
                (m) => m.DashboardsComponent,
            ),
        canActivate: [AuthorisedUserGuard, supportGroupsGuard],
        children: [
            {
                path: 'list',
                loadComponent: () =>
                    import('./dashboards/dashboard-list.component').then(
                        (m) => m.DashboardListComponent,
                    ),
            },
            {
                path: ':id/alerts',
                title: title('Dashboard Alerts'),
                loadComponent: () =>
                    import('./dashboards/dashboard-alert-list.component').then(
                        (m) => m.DashboardAlertListComponent,
                    ),
            },
            {
                path: ':id/alerts/manage',
                title: title('New Alert'),
                loadComponent: () =>
                    import('./dashboards/dashboard-alert-manage.component').then(
                        (m) => m.DashboardAlertManageComponent,
                    ),
            },
            {
                path: ':id/alerts/manage/:alert_id',
                title: title('Edit Alert'),
                loadComponent: () =>
                    import('./dashboards/dashboard-alert-manage.component').then(
                        (m) => m.DashboardAlertManageComponent,
                    ),
            },
            {
                path: 'manage',
                title: title('New Dashboard'),
                loadComponent: () =>
                    import('./dashboards/dashboard-mange.component').then(
                        (m) => m.DashboardManageComponent,
                    ),
            },
            {
                path: 'manage/:id',
                title: title('Edit Dashboard'),
                loadComponent: () =>
                    import('./dashboards/dashboard-mange.component').then(
                        (m) => m.DashboardManageComponent,
                    ),
            },
            { path: '**', redirectTo: 'list' },
        ],
    },
    {
        path: 'recorder-grid',
        title: title('Recorder Streams'),
        loadComponent: () =>
            import('./recorder-view.component').then(
                (m) => m.RecorderGridViewComponent,
            ),
        canActivate: [AuthorisedUserGuard, supportGroupsGuard],
    },
    { path: '**', redirectTo: 'alerts' },
];
