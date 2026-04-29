import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reloadOnChunkLoadError } from '@placeos/common';
import {
    AuthorisedUserGuard,
    RedirectComponent,
    UnauthorisedComponent,
} from '@placeos/components';

const routes: Routes = [
    { path: '-', component: RedirectComponent },
    { path: 'unauthorised', component: UnauthorisedComponent, title: 'Unauthorised' },
    {
        path: 'book/rooms',
        title: 'Room Bookings',
        loadChildren: () =>
            import('./day-view/day-view.module').then((m) => m.DayViewModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'facilities',
        title: 'Facilities',
        loadChildren: () =>
            import('./facilities/facilities.module').then(
                (m) => m.FacilitiesModule,
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/visitors',
        title: 'Visitors',
        loadChildren: () =>
            import('./visitors/visitors.module').then((m) => m.VisitorsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/assets',
        title: 'Assets',
        loadChildren: () =>
            import('./asset-manager/asset-manager.module').then(
                (m) => m.AppAssetManangerModule,
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/desks',
        title: 'Desk Bookings',
        loadChildren: () =>
            import('./desks/desks.module').then((m) => m.DesksModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/lockers',
        title: 'Locker Bookings',
        loadChildren: () =>
            import('./lockers/lockers.module').then((m) => m.LockersModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'reports',
        title: 'Reports',
        loadChildren: () =>
            import('./reports/reports.module').then((m) => m.ReportsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'entertainment/events',
        title: 'Events',
        loadChildren: () =>
            import('./events/events.module').then((m) => m.EventsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'users/staff',
        title: 'Staff',
        loadChildren: () =>
            import('./staff/staff.module').then((m) => m.StaffModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/catering',
        title: 'Catering',
        loadChildren: () =>
            import('./catering/catering.module').then((m) => m.CateringModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'points-management',
        title: 'Points Management',
        loadChildren: () =>
            import('./points/points.module').then((m) => m.PointsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'book/parking',
        title: 'Parking Bookings',
        loadChildren: () =>
            import('./parking/parking.module').then((m) => m.AppParkingModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'surveys',
        title: 'Surveys',
        loadChildren: () =>
            import('./surveys/surveys.module').then((m) => m.SurveysModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'room-management',
        title: 'Room Management',
        loadChildren: () =>
            import('./room-manager/room-manager.module').then(
                (m) => m.RoomManagerModule,
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'zone-management',
        title: 'Zone Management',
        loadChildren: () =>
            import('./zone-manager/zone-manager.module').then(
                (m) => m.ZoneManagerModule,
            ),
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
            import('./email-templates/email-templates.module').then(
                (m) => m.EmailTemplatesModule,
            ),
    },
    {
        path: 'deals-n-offers',
        title: 'Deals & Offers',
        loadChildren: () =>
            import('./deals/deals.module').then((m) => m.DealsModule),
    },
    {
        path: 'points-of-interest',
        title: 'Points of Interest',
        loadChildren: () =>
            import('./poi-manager/poi-manager.module').then(
                (m) => m.POIManagerModule,
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'url-management',
        title: 'URL Management',
        loadChildren: () =>
            import('./url-management/url-manager.module').then(
                (m) => m.UrlManagerModule,
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'signage',
        title: 'Signage',
        loadChildren: () =>
            import('./signage/signage.module').then((m) => m.SignageModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '-' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            errorHandler: (error) => reloadOnChunkLoadError(error),
            useHash: true,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
