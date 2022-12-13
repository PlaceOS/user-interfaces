import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    RedirectComponent,
    UnauthorisedComponent,
} from '@placeos/components';
import { BuildingListComponent } from './surveys/building-list.component';

const routes: Routes = [
    { path: '-', component: RedirectComponent },
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'day-view',
        loadChildren: () =>
            import('./day-view/day-view.module').then((m) => m.DayViewModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'week-view',
        loadChildren: () =>
            import('./week-view/week-view.module').then((m) => m.DayViewModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'facilities',
        loadChildren: () =>
            import('./facilities/facilities.module').then(
                (m) => m.FacilitiesModule
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'visitors',
        loadChildren: () =>
            import('./visitors/visitors.module').then((m) => m.VisitorsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'asset-manager',
        loadChildren: () =>
            import('./asset-manager/asset-manager.module').then(
                (m) => m.AppAssetManangerModule
            ),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'desks',
        loadChildren: () =>
            import('./desks/desks.module').then((m) => m.DesksModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('./reports/reports.module').then((m) => m.ReportsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'staff',
        loadChildren: () =>
            import('./staff/staff.module').then((m) => m.StaffModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'catering',
        loadChildren: () =>
            import('./catering/catering.module').then((m) => m.CateringModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'points',
        loadChildren: () =>
            import('./points/points.module').then((m) => m.PointsModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'parking',
        loadChildren: () =>
            import('./parking/parking.module').then((m) => m.AppParkingModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    {
        path: 'surveys',
        loadChildren: () =>
            import('./surveys/surveys.module').then((m) => m.SurveysModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '-' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
