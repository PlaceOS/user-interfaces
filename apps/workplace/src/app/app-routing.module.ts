import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    MisconfiguredComponent,
    UnauthorisedComponent,
    RedirectComponent,
} from '@placeos/components';

const routes: Routes = [
    { path: '-', component: RedirectComponent },
    { path: 'unauthorised', component: UnauthorisedComponent },
    { path: 'misconfigured', component: MisconfiguredComponent },
    {
        path: 'dashboard',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'landing',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./landing/landing.module').then((m) => m.AppLandingModule),
    },
    {
        path: 'book',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./book/book.module').then((m) => m.BookModule),
    },
    {
        path: 'explore',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./explore/explore.module').then((m) => m.ExploreModule),
    },
    {
        path: 'control',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./control/control.module').then((m) => m.ControlModule),
    },
    {
        path: 'directory',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./directory/directory.module').then(
                (m) => m.DirectoryModule
            ),
    },
    {
        path: 'your-bookings',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./new-schedule/schedule.module').then(
                (m) => m.AppScheduleModule
            ),
    },
    {
        path: 'schedule',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./schedule/schedule.module').then(
                (m) => m.AppScheduleModule
            ),
    },
    {
        path: 'group-events',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./events/group-events.module').then(
                (m) => m.GroupEventsModule
            ),
    },
    { path: '**', redirectTo: '-', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            paramsInheritanceStrategy: 'always',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
