import { Routes } from '@angular/router';

import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

export const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: 'alerts',
        loadComponent: () =>
            import('./alerts.component').then((m) => m.AlertsComponent),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'alerts/:id',
        loadComponent: () =>
            import('./alerts.component').then((m) => m.AlertsComponent),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'remote-support',
        loadComponent: () =>
            import('./remote-support.component').then(
                (m) => m.RemoteSupportComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'analytics',
        loadComponent: () =>
            import('./analytics.component').then((m) => m.AnalyticsComponent),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'dashboards',
        loadComponent: () =>
            import('./dashboards/dashboards.component').then(
                (m) => m.DashboardsComponent,
            ),
        canActivate: [AuthorisedUserGuard],
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
                loadComponent: () =>
                    import('./dashboards/dashboard-alert-list.component').then(
                        (m) => m.DashboardAlertListComponent,
                    ),
            },
            {
                path: ':id/alerts/manage',
                loadComponent: () =>
                    import('./dashboards/dashboard-alert-manage.component').then(
                        (m) => m.DashboardAlertManageComponent,
                    ),
            },
            {
                path: ':id/alerts/manage/:alert_id',
                loadComponent: () =>
                    import('./dashboards/dashboard-alert-manage.component').then(
                        (m) => m.DashboardAlertManageComponent,
                    ),
            },
            {
                path: 'manage',
                loadComponent: () =>
                    import('./dashboards/dashboard-mange.component').then(
                        (m) => m.DashboardManageComponent,
                    ),
            },
            {
                path: 'manage/:id',
                loadComponent: () =>
                    import('./dashboards/dashboard-mange.component').then(
                        (m) => m.DashboardManageComponent,
                    ),
            },
            {
                path: 'view/:id',
                loadComponent: () =>
                    import('./dashboards/dashboard-view.component').then(
                        (m) => m.DashboardViewComponent,
                    ),
            },
            { path: '**', redirectTo: 'list' },
        ],
    },
    {
        path: 'recorder-grid',
        loadComponent: () =>
            import('./recorder-view.component').then(
                (m) => m.RecorderGridViewComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'alerts' },
];
