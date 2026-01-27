import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    MisconfiguredComponent,
    RedirectComponent,
    UnauthorisedComponent,
} from '@placeos/components';

const routes: Routes = [
    { path: '-', component: RedirectComponent },
    { path: 'unauthorised', component: UnauthorisedComponent },
    { path: 'misconfigured', component: MisconfiguredComponent },
    // {
    //     path: 'landing',
    //     canActivate: [AuthorisedUserGuard],
    //     canLoad: [AuthorisedUserGuard],
    //     loadChildren: () =>
    //         import('./landing/landing.module').then((m) => m.AppLandingModule),
    // },
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
                (m) => m.DirectoryModule,
            ),
    },
    {
        path: 'your-bookings',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./schedule/schedule.module').then(
                (m) => m.AppScheduleModule,
            ),
    },
    {
        path: 'group-events',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./events/group-events.module').then(
                (m) => m.GroupEventsModule,
            ),
    },
    {
        path: 'deals-n-offers',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./deals/deals.module').then((m) => m.DealsModule),
    },
    {
        path: 'landing',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadComponent: () =>
            import('./landing-new/landing-new.component').then(
                (m) => m.LandingNewComponent,
            ),
    },
    {
        path: 'team-schedule',
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
        loadComponent: () =>
            import('./team-schedule/team-schedule.component').then(
                (m) => m.TeamScheduleComponent,
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
