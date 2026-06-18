import { Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    RedirectComponent,
    UnauthorisedComponent,
} from '@placeos/components';

export const routes: Routes = [
    { path: '-', component: RedirectComponent },
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
        title: 'Unauthorised',
    },
    {
        path: 'book/rooms',
        title: 'Room Bookings',
        loadChildren: () =>
            import('./day-view/day-view.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'facilities',
        title: 'Facilities',
        loadChildren: () =>
            import('./facilities/facilities.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/visitors',
        title: 'Visitors',
        loadChildren: () =>
            import('./visitors/visitors.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/assets',
        title: 'Assets',
        loadChildren: () =>
            import('./asset-manager/asset-manager.routes').then(
                (m) => m.ROUTES,
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/desks',
        title: 'Desk Bookings',
        loadChildren: () =>
            import('./desks/desks.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/lockers',
        title: 'Locker Bookings',
        loadChildren: () =>
            import('./lockers/lockers.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'reports',
        title: 'Reports',
        loadChildren: () =>
            import('./reports/reports.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'entertainment/events',
        title: 'Events',
        loadChildren: () =>
            import('./events/events.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'users/staff',
        title: 'Staff',
        loadChildren: () =>
            import('./staff/staff.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/catering',
        title: 'Catering',
        loadChildren: () =>
            import('./catering/catering.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'points-management',
        title: 'Points Management',
        loadChildren: () =>
            import('./points/points.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/parking',
        title: 'Parking Bookings',
        loadChildren: () =>
            import('./parking/parking.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'surveys',
        title: 'Surveys',
        loadChildren: () =>
            import('./surveys/surveys.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'room-management',
        title: 'Room Management',
        loadChildren: () =>
            import('./room-manager/room-manager.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'zone-management',
        title: 'Zone Management',
        loadChildren: () =>
            import('./zone-manager/zone-manager.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'level-management',
        redirectTo: 'zone-management',
    },
    {
        path: 'building-management',
        redirectTo: 'zone-management',
    },
    {
        path: 'region-management',
        redirectTo: 'zone-management',
    },
    {
        path: 'email-templates',
        title: 'Email Templates',
        loadChildren: () =>
            import('./email-templates/email-templates.routes').then(
                (m) => m.ROUTES,
            ),
    },
    {
        path: 'deals-n-offers',
        title: 'Deals & Offers',
        loadChildren: () =>
            import('./deals/deals.routes').then((m) => m.ROUTES),
    },
    {
        path: 'points-of-interest',
        title: 'Points of Interest',
        loadChildren: () =>
            import('./poi-manager/poi-manager.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'url-management',
        title: 'URL Management',
        loadChildren: () =>
            import('./url-management/url-manager.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'signage',
        title: 'Signage',
        loadChildren: () =>
            import('./signage/signage.routes').then((m) => m.ROUTES),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '-' },
];
